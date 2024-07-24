"use server";
import EmailTemplate from "@/components/email-template";
import { render } from "@react-email/components";
interface State {
    error: string | null;
    success: boolean;
}
export const sendEmail = async (prevState: State, formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    try {
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // Use `true` for port 465, `false` for all other ports
            auth: {
                user: "hasanghorbel@gmail.com",
                pass: process.env.SMTP_API_KEY,
            },
        });

        const emailHTML = render(EmailTemplate({ name, email, message }));

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: `${name} <${email}>`,
            to: "hasanghorbel@gmail.com",
            subject: "Forum Subject",
            text: message,
            html: emailHTML
        });

        console.log("Message sent: %s", info.messageId);
        return {
            error: null,
            success: true,
        };
    } catch (error) {
        console.log(error);
        return {
            error: (error as Error).message,
            success: false,
        };
    }
};
