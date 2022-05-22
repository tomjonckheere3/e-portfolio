import { createMessage } from "../lib/graphcms"
import { useState } from "react"
import { fi } from "date-fns/locale"

export default function ContactForm() {

    const handleSubmit = async event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const subject = event.target.subject.value
        const message = event.target.message.value

        const res = (await createMessage(name, email, subject, message))

        if (res.id !== null) {
            event.target.name.value = ""
            event.target.email.value = ""
            event.target.subject.value = ""
            event.target.message.value = ""

            const firstName = name.split(" ")[0]
            
            const messageSentEl = document.getElementById("message-sent")
            messageSentEl.innerHTML = `Thank you, ${firstName}! Your message has been sent.`
            messageSentEl.classList.remove("invisible")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input id="name" name="name" type="text" placeholder="Name" className="block w-3/4 md:w-1/2 mx-auto mb-4 py-2 border-b-2 border-gray-400 focus:border-sky-500 text-gray-600 placeholder-gray-400 outline-none dark:text-white dark:bg-dark-line" required />
            <input id="email" name="email" type="email" placeholder="Email" className="block w-3/4 md:w-1/2 mx-auto mb-4 py-2 border-b-2 border-gray-400 focus:border-sky-500 text-gray-600 placeholder-gray-400 outline-none dark:text-white dark:bg-dark-line" required />
            <input id="subject" name="subject" type="subject" placeholder="Subject" className="block w-3/4 md:w-1/2 mx-auto mb-4 py-2 border-b-2 border-gray-400 focus:border-sky-500 text-gray-600 placeholder-gray-400 outline-none dark:text-white dark:bg-dark-line" required />
            <textarea id="message" name="message" placeholder="Message" rows="5" className="block w-3/4 md:w-1/2 mx-auto mb-10 py-2 border-b-2 border-gray-400 focus:border-sky-500 text-gray-600 placeholder-gray-400 outline-none dark:text-white dark:bg-dark-line" required />
            <div className="text-center">
                <input type="submit" value="Send Message" className="py-2 mb-8 px-4 bg-sky-500 hover:bg-sky-600 shadow-lg border border rounded border-gray-500 dark:border-white text-white font-bold" /> 
                <small id="message-sent" className="block invisible"></small>
            </div>
        </form>
    )
}