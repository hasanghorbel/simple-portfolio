import Footer from "@/components/footer";
import Form from "@/components/form";
import SkillList from "@/components/skill-list";

export default function Home() {
    return (
        <>
            <section>
                <h1 className="mb-8 text-3xl font-semibold tracking-tighter">
                    About me
                </h1>
                <p className="mb-4">
                    {`
                      I am a developer with a deep passion for mathematics and a keen eye for solving complex problems through code.
                      I thrive on challenges that require analytical thinking and enjoy translating mathematical concepts into practical applications.
                      I also like designing software and building websites using the latest technologies out there.
                      `}
                </p>
            </section>
            <section>
                <h1
                    id="skills"
                    className="mt-8 mb-8 text-3xl font-semibold tracking-tighter"
                >
                    My skills
                </h1>
                <p>
                    Proficient in a diverse array of programming languages,
                    including:
                </p>
                <SkillList />
            </section>
            <section>
                <h1
                    id="contact-me"
                    className="mt-16 mb-8 text-3xl font-semibold tracking-tighter"
                >
                    Contact me
                </h1>
                <Form />
            </section>
            <Footer />
        </>
    );
}
