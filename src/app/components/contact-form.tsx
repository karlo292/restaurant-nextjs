import {Image} from "next/dist/client/image-component";

export default function ContactForm() {
    return (
        <section className={"w-full pt-12 sm:p-4"}>
            <div className={"flex flex-col items-start justify-center mx-auto max-w-300 gap-4 mt-16"}>
                <h1 className={"text-5xl font-bold  text-black"}>Contact Us</h1>
                <p className={"text-lg text-muted-foreground"}>Have a question or planning a special event? We&#39;d love to hear from you.</p>
                <div className={"flex flex-col lg:flex-row justify-between w-full"}>
                    <form className={"w-full flex flex-col lg:max-w-138 p-6"}>
                        <h2 className={"font-bold text-2xl"}>Send a message</h2>
                        <div className={"mt-4 flex w-full flex-wrap flex-col sm:flex-nowrap sm:flex-row gap-4"}>
                            <div className={"flex flex-col w-full gap-1"}>
                                <label className={"text-sm font-semibold"}>First Name</label>
                                <input type={"text"} placeholder={"John"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                            </div>
                            <div className={"flex flex-col w-full gap-1"}>
                                <label className={"text-sm font-semibold"}>Last Name</label>
                                <input type={"text"} placeholder={"Doe"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                            </div>
                        </div>
                        <div className={"flex flex-col w-full gap-1 mt-4"}>
                            <label className={"text-sm font-semibold"}>Email</label>
                            <input type={"email"} placeholder={"john@example.com"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                        </div>
                        <div className={"flex flex-col w-full gap-1 mt-4"}>
                            <label className={"text-sm font-semibold"}>Subject</label>
                            <select className={"border bg-white w-full border-border rounded-md p-3 mt-2"}>
                                <option value="" disabled>Select a subject</option>
                                <option value="reservation">Reservation</option>
                                <option value="catering">Catering Inquiry</option>
                                <option value="feedback">Feedback</option>
                                <option value="private-event">Private Event</option>
                                <option value="general">General Question</option>
                            </select>
                        </div>
                        <div className={"flex flex-col w-full gap-1 mt-4"}>
                            <label className={"text-sm font-semibold"}>Message</label>
                            <textarea className={"border bg-white w-full border-border rounded-md min-h-30 p-3 mt-2"} />
                        </div>
                    </form>
                    <div className={"w-full flex flex-col sm:flex-row justify-between lg:max-w-138 p-6 gap-6"}>
                        <div className={"flex flex-col justify-start w-full gap-10"}>
                            <div>
                                <div className={"flex flex-row justify-start items-center gap-2 mb-2"}>
                                    <Image src={"/svgs/location-primary.svg"} alt={"location"} width={20} height={20} />
                                    <h3 className={"text-lg font-primary font-bold text-primary"}>Location</h3>
                                </div>
                                <p className={"max-w-42 text-muted-foreground text-[14px]"}>123 Culinary Avenue Food District, NY 10012</p>
                            </div>
                            <div>
                                <div className={"flex flex-row justify-start items-center gap-2 mb-2"}>
                                    <Image src={"/svgs/phone-primary.svg"} alt={"phone"} width={20} height={20} />
                                    <h3 className={"text-lg font-primary font-bold text-primary"}>Phone</h3>
                                </div>
                                <p className={"max-w-42 text-muted-foreground text-[14px]"}>(555) 123-4567</p>
                            </div>
                        </div>
                        <div className={"flex flex-col justify-start w-full gap-10"}>
                            <div>
                                <div className={"flex flex-row justify-start items-center gap-2 mb-2"}>
                                    <Image src={"/svgs/clock-primary.svg"} alt={"hours"} width={20} height={20} />
                                    <h3 className={"text-lg font-primary font-bold text-primary"}>Hours</h3>
                                </div>
                                <p className={"max-w-42 text-muted-foreground text-[14px]"}>Mon-Sun: 5pm – 11pm Happy Hour: 5pm – 7pm</p>
                            </div>
                            <div>
                                <div className={"flex flex-row justify-start items-center gap-2 mb-2"}>
                                    <Image src={"/svgs/mail-primary.svg"} alt={"email"} width={20} height={20} />
                                    <h3 className={"text-lg font-primary font-bold text-primary"}>Email</h3>
                                </div>
                                <p className={"max-w-42 text-muted-foreground text-[14px]"}>hello@savoria.com</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}