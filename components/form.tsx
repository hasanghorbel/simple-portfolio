"use client"
import { sendEmail } from "@/lib/actions"
import { useEffect, useState } from "react"
import { useFormState } from "react-dom"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
    error: null,
    success: false
  })
  //Result if message was sent or not
  const [result, setResult] = useState('');

  //Status of while message is being sent
  const [status, setStatus] = useState('Send');

  useEffect(() => {
    if (sendEmailState.success) {
      setResult('Email sent!');
      setStatus('Submit');
    }
    if (sendEmailState.error) {
      setResult('Error sending email!');
      setStatus('Submit');
    }
  }, [sendEmailState])

  return (
    <div className="flex flex-col">
      <form onSubmit={() => { setStatus("Sending..."); }} action={sendEmailAction} className="flex flex-col gap-5">
        <label htmlFor="name">Full Name</label>
        <Input type="text" id="name" name="name" autoComplete="off" required={true} />
        <label htmlFor="email">E-mail</label>
        <Input type="email" id="email" name="email" autoComplete="off" required={true} />
        <label htmlFor="message">Message</label>
        <Textarea name="message" id="message" maxLength={300} required={true}></Textarea>
        <Button type="submit" className="m-auto w-24 bg-gray-300">{status}</Button>
        <h3>{result}</h3>
      </form>
    </div>
  )
}