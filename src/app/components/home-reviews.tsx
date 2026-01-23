import Review from "@/app/components/review";

export default function HomeReviews() {
    return (
        <section className={"w-full"}>
            <div className={"max-w-360 w-full  mx-auto px-10 py-20 rounded-md justify-center bg-secondary min-h-165 flex flex-col items-center text-center"}>
                <h2 className={"text-black font-semibold font-primary text-4xl md:text-5xl mb-5"}>What Our Guests Say</h2>
                <p className={"max-w-140.75 text-sm sm:text-[15px] text-muted-foreground mb-4"}>Don&#39;t just take our word for it. Here is what our valued guests have to say about their dining experience.</p>
                <div>
                    <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-8 md:px-4"}>
                        <Review
                            stars={5}
                            review={"Absolutely fantastic experience! The food was exquisite, and the ambiance was perfect for our anniversary dinner. Highly recommend!"}
                            name={"Mark"}
                            role={"Food Critic"}
                            imageUrl={"/reviews/reviewUser1.png"}
                        />
                        <Review
                            stars={4}
                            review={"A meal to die for! Every dish was a masterpiece, bursting with flavor and creativity. The service was impeccable, making us feel truly special."}
                            name={"Sarah Chen"}
                            role={"Local Guide"}
                            imageUrl={"/reviews/reviewUser2.png"}
                        />
                        <Review
                            stars={4}
                            review={"A meal to die for! Every dish was a masterpiece, bursting with flavor and creativity. The service was impeccable, making us feel truly special."}
                            name={"Sarah Chen"}
                            role={"Local Guide"}
                            imageUrl={"/reviews/reviewUser2.png"}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

