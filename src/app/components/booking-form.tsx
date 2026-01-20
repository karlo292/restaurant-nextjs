import Link from "next/dist/client/link";
import {FaMapMarkerAlt} from "react-icons/fa";
import {FaPhone, FaRegClock} from "react-icons/fa6";
import {IoMdMail} from "react-icons/io";

export default function BookingForm() {
    return (
        <section className={"w-full"}>
            <div className={"mx-auto max-w-360 w-full px-10 py-20 flex flex-col md:flex-row items-center justify-center gap-20"}>
                <div className={"max-w-lg w-full"}>
                    <h2 className={"text-black font-inter text-4xl md:text-5xl mb-5 font-semibold text-start"}>Book a Table</h2>
                    <p className={"text-[15px] text-muted-foreground"}>Reserve your spot for an unforgettable evening. For parties larger than 8, please contact us directly.</p>
                    <form>
                        <div className={"flex flex-col sm:flex-row justify-between"}>
                            <div>
                                <p>Date</p>
                                <input type="date" placeholder={"Select date"} className={"border bg-white w-full sm:w-62 border-border rounded-md p-3 mt-2 mb-4"} />
                            </div>
                            <div>
                                <p>Time</p>
                                <input type="time" className={"border bg-white w-full sm:w-62 border-border rounded-md p-3 mt-2 mb-4"} />
                            </div>
                        </div>
                        <div className={"flex flex-col sm:flex-row justify-between"}>
                            <div>
                                <p>Guests</p>
                                <input type="number" min={1} placeholder={"Amount"} className={"border bg-white w-full sm:w-62 border-border rounded-md p-3 mt-2 mb-4"} />
                            </div>
                            <div>
                                <p>Occasion</p>
                                <input type="text" placeholder={"ex. Dinner"} className={"border bg-white w-full sm:w-62 border-border rounded-md p-3 mt-2 mb-4"} />
                            </div>
                        </div>
                        <div>
                            <p>Full Name</p>
                            <input type="text" placeholder={"John Doe"} className={"border bg-white w-full border-border rounded-md p-3 mt-2 mb-4"} />
                        </div>
                        <div>
                            <p>Email Address</p>
                            <input type="email" placeholder={"john@example.com"} className={"border bg-white w-full border-border rounded-md p-3 mt-2 mb-4"} />
                        </div>
                        <div className={"mt-4 flex text-center"}>
                            <Link href={"#"} type={"submit"} className={"bg-primary w-full py-3 px-4 rounded-md text-[16px] hover:cursor-pointer text-white font-inter"}>
                                Confirm Reservation
                            </Link>
                        </div>

                    </form>
                </div>
                <div>
                    <h2 className={"text-black font-inter text-4xl md:text-5xl mb-5 font-semibold text-start"}>Get in Touch</h2>
                    <div className={"flex flex-col justify-start gap-2"}>
                        <ContactDetail icon={FaMapMarkerAlt} title={"Address"} detail={"123 Culinary St, Foodie City, FC 12345"} />
                        <ContactDetail icon={FaPhone} title={"Phone"} detail={"+1 (555) 123-4567"} />
                        <ContactDetail icon={IoMdMail} title={"Email"} detail={"example@savoria.com"} />
                        <ContactDetail icon={FaRegClock} title={"Working Hours"} detail={"Mon-Sun: 12:00 PM - 10:00 PM"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

//@typescript-eslint/no-explicit-any
function ContactDetail({ icon: Icon, title, detail }: { icon: React.ComponentType<any>; title: string; detail: string; }) {
    return (
        <div className={"flex flex-row gap-3"}>
            <Icon className={"w-5 h-5 mt-1 text-primary"} />
            <div className={"max-w-57.5"}>
                <h3 className={"font-bold"}>{title}</h3>
                <p className={"text-sm text-muted-foreground"}>{detail}</p>
            </div>
        </div>
    )
}