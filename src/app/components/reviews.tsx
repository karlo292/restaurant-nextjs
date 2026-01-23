import {FaStar} from "react-icons/fa6";
import Review from "@/app/components/review";

export function Reviews() {
    return (
        <section className={"w-full"}>
            <div className={"bg-secondary w-full min-h-115 flex flex-col items-center justify-center"}>
                <div className={"max-w-300 mx-auto p-4 text-center"}>
                    <div className={"max-w-43 bg-white rounded-3xl border border-border py-2 mx-auto flex flex-row gap-1 items-center justify-center"}>
                        <FaStar className={"text-accent"} />
                        <p className={"font-semibold text-[16px]"}>4.9 Star Rating</p>
                    </div>
                    <h1 className={"font-bold text-5xl mt-12"}>Guest Experiences</h1>
                    <p className={"text-lg text-muted-foreground mt-12"}>Join thousands of happy guests who have made Savor & Vine their destination for unforgettable culinary moments.</p>
                    <div className={"flex flex-row items-center justify-center gap-6 mt-6"}>
                        <div>
                            <h3 className={"font-bold text-2xl"}>2.400+</h3>
                            <p className={"text-[15px] text-muted-foreground"}>Reviews</p>
                        </div>
                        <div>
                            <h3 className={"font-bold text-2xl"}>4.9</h3>
                            <p className={"text-[15px] text-muted-foreground"}>Average</p>
                        </div>
                        <div>
                            <h3 className={"font-bold text-2xl"}>98%</h3>
                            <p className={"text-[15px] text-muted-foreground"}>Recommended</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"max-w-300 mx-auto p-4"}>
                <h2 className={"text-center font-bold text-3xl my-12"}>Latest Reviews</h2>
                <div className={"flex flex-row flex-wrap items-center justify-center gap-6"}>
                    <Review
                        stars={5}
                        review={"Absolutely fantastic experience! The food was exquisite, and the ambiance was perfect for our anniversary dinner. Highly recommend!"}
                        name={"Mark"}
                        role={"Food Critic"}
                        imageUrl={"/reviews/reviewUser1.png"}
                    />
                    <Review
                        stars={5}
                        review={"The truffle pasta was divine, and the wine pairing suggestions were spot on. Our server was knowledgeable and attentive. Will definitely return!"}
                        name={"Sarah"}
                        role={"Regular Guest"}
                        imageUrl={"/reviews/reviewUser2.png"}
                    />
                    <Review
                        stars={5}
                        review={"Best fine dining experience in the city! The chef's tasting menu was a culinary journey. Every dish was beautifully presented and delicious."}
                        name={"Michelle"}
                        role={"Local Guide"}
                        imageUrl={"/reviews/reviewUser3.png"}
                    />
                    <Review
                        stars={5}
                        review={"Celebrated my birthday here and the staff made it truly special. The steak was cooked to perfection and the dessert was unforgettable!"}
                        name={"Jonathan"}
                        role={"First-time Visitor"}
                        imageUrl={"/reviews/reviewUser4.png"}
                    />
                    <Review
                        stars={5}
                        review={"Impeccable service from start to finish. The seasonal menu showcases fresh, local ingredients. A true gem for food enthusiasts!"}
                        name={"Lisa"}
                        role={"Food Blogger"}
                        imageUrl={"/reviews/reviewUser5.png"}
                    />
                    <Review
                        stars={5}
                        review={"We hosted our company dinner here and everyone was impressed. Great atmosphere, amazing food, and the private dining room was perfect!"}
                        name={"David"}
                        role={"Business Professional"}
                        imageUrl={"/reviews/reviewUser6.png"}
                    />

                </div>
            </div>
        </section>
    )
}