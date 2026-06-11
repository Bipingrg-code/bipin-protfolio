import { useState } from "react"
import TitleHeader from "../components/TitleHeader"
import ContactExperience from "../components/Models/ContectModes/ComputerExperience"

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [loading, setLoading] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setForm((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        try {
            // example: send to an API endpoint
            // const res = await fetch("/api/contact", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify(form)
            // })

            // if (!res.ok) throw new Error("Failed to send message")

            // setForm({ name: "", email: "", message: "" })
            alert("Message sent successfully!")
        } catch (err) {
            console.error(err)
            alert("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }
    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Get in Touch – Let’s Connect" sub="💬 Have questions or ideas? Let’s talk! 🚀" />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Enter your fullname?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name">Your Email</label>
                                    <input
                                        type="text"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Whats your email?"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="name">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        required
                                    />
                                </div>
                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Contact 3d */}
                    <div className="xl:col-span-7 min-h-96">
                        <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact