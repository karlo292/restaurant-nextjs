import Link from "next/dist/client/link";
import {Image} from "next/dist/client/image-component";
import {FaMapMarkerAlt} from "react-icons/fa";

export default function ReservationsForm() {
    return (
        <section className={"w-full py-16 px-4"}>
            <div className={"max-w-300 mx-auto"}>
                <div className={"text-center mb-18"}>
                    <h1 className={"font-bold text-4xl mb-4"}>Make a Reservation</h1>
                    <p className={"text-[15px] text-muted-foreground"}>Join us for an unforgettable dining experience. Reserve your table below for lunch or dinner service.</p>
                </div>
                <div className={"flex flex-row flex-wrap justify-between items-start"}>
                    <form className={"max-w-188 w-full"}>
                        <h3 className={"text-2xl font-bold"}>Find a Table</h3>
                        <div className={"mt-4 flex flex-row w-full flex-wrap sm:flex-nowrap gap-4"}>
                            <div className={"flex flex-col gap-1 w-full"}>
                                <label className={"text-sm font-semibold"}>Date</label>
                                <input type={"date"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                            </div>
                            <div className={"flex flex-col gap-1 w-full"}>
                                <label className={"text-sm font-semibold"}>Time</label>
                                <input type={"time"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                            </div>
                            <div className={"flex flex-col gap-1 w-full"}>
                                <label className={"text-sm font-semibold"}>Guests</label>
                                <input type={"number"} min={1} max={20} defaultValue={2} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                            </div>
                        </div>

                        <div className={"h-px my-8 w-full bg-border"} />

                        <h3 className={"text-2xl font-bold"}>Contact Details</h3>
                        <div>
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
                            <div className={"mt-4 flex w-full flex-wrap flex-col sm:flex-nowrap sm:flex-row gap-4"}>
                                <div className={"flex flex-col w-full gap-1"}>
                                    <label className={"text-sm font-semibold"}>Email Address</label>
                                    <input type={"email"} placeholder={"john@example.com"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                                </div>
                                <div className={"flex flex-col w-full gap-1"}>
                                    <label className={"text-sm font-semibold"}>Phone Number</label>
                                    <input type={"tel"} placeholder={"(555) 123-4567"} className={"border bg-white w-full border-border rounded-md p-3 mt-2"} />
                                </div>
                            </div>
                            <div className={"flex flex-col w-full gap-1 mt-4"}>
                                <label className={"text-sm font-semibold"}>Special Requests</label>
                                <textarea placeholder={"(555) 123-4567"} className={"border bg-white w-full border-border rounded-md min-h-30 p-3 mt-2"} />
                                <p className={"text-[15px] text-muted-foreground mt-2"}>We will do our best to accommodate your request.</p>
                            </div>
                            <div className={"mt-4 flex text-center"}>
                                <Link href={"#"} type={"submit"} className={"bg-primary w-full py-3 px-4 rounded-md text-[16px] hover:cursor-pointer text-white font-inter"}>
                                    Confirm Reservation
                                </Link>
                            </div>
                        </div>


                    </form>
                    <div className={"max-w-88 hidden xl:block w-full"}>
                        <Image src={"/reservations/img.png"} className={"rounded-sm"} width={352} height={256.86} alt={"Reservations image"} />
                        <div className={"bg-secondary w-full px-6 py-8 mt-8 rounded-sm"}>
                            <h2 className={"font-bold text-lg mb-5"}>Opening Hours</h2>
                            <div className={"flex flex-row gap-4 mb-6 items-start"}>
                                <div>
                                    <h3 className={"font-bold text-lg"}>Lunch</h3>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Mon-Fri: 11:30am – 2:30pm</p>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Sat-Sun: 11:00am – 3:00pm</p>
                                </div>
                            </div>
                            <div className={"flex flex-row gap-4 items-start"}>
                                <div>
                                    <h3 className={"font-bold text-lg"}>Dinner</h3>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Mon-Thu: 5:00pm – 10:00pm</p>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Fri-Sat: 5:00pm – 11:00pm</p>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Sun: 5:00pm – 9:30pm</p>
                                </div>
                            </div>
                            <div className={"h-px my-4 w-full bg-border"} />
                            <h2 className={"font-bold text-lg mb-5"}>Location</h2>
                            <div className={"flex flex-row gap-4 mb-6 items-start"}>
                                <div>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>123 Culinary Avenue</p>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Food District, NY 10012</p>
                                    <Link href={"#"} className={"text-sm text-primary font-semibold"}>Get Directions</Link>
                                </div>
                            </div>
                            <div className={"flex flex-row gap-4 items-start"}>
                                <div>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>Call us:</p>
                                    <p className={"text-sm text-[#1F2937] font-semibold"}>(212) 555-0199</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}