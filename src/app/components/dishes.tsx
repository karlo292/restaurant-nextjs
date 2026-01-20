import {Image} from "next/dist/client/image-component";
import Link from "next/link";

export default function Dishes() {
    return (
        <section className={"min-h-212.5 p-4 md:p-0 flex items-center justify-center flex-col text-center"}>
            <h2 className={"text-black font-semibold font-primary text-4xl md:text-5xl mb-5"}>Our Signature Dishes</h2>
            <p className={"max-w-140.75 text-sm sm:text-[15px] text-muted-foreground mb-4"}>Handpicked favorites from our seasonal menu, crafted with passion by our executive chef.</p>
            <div>
                <div className={"grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8 mt-8 md:px-4"}>
                    <Dish
                        name={"Grilled Atlantic Salmon"}
                        description={"Fresh Atlantic salmon fillet, grilled to perfection, served with asparagus, roasted potatoes, and a zesty lemon butter sauce."}
                        imageUrl={"/dishes/dish1.png"}
                        price={"$32"}
                    />
                    <Dish
                        name={"Prime Ribeye Steak"}
                        description={"12oz Prime Ribeye, dry-aged for 30 days, seared and served with truffle mashed potatoes and red wine reduction."}
                        imageUrl={"/dishes/dish2.png"}
                        price={"$45"}
                    />
                    <Dish
                        name={"Grilled Atlantic Salmon"}
                        description={"Fresh Atlantic salmon fillet, grilled to perfection, served with asparagus, roasted potatoes, and a zesty lemon butter sauce."}
                        imageUrl={"/dishes/dish3.png"}
                        price={"$32"}
                    />
                </div>
            </div>
            <Link href={"/menu"} className={"bg-none mt-12 text-black px-6 py-3 border border-border text-sm rounded-md font-bold"}>
                View Full Menu
            </Link>
        </section>
    )
}

function Dish({ name, description, imageUrl, price }: { name: string; description: string; imageUrl: string; price: string }) {
    return (
        <div className={"max-h-97.5 border border-border bg-white w-full h-full max-w-86.5 rounded-md"}>
            <Image src={imageUrl} width={345} height={240} alt={name + " image"} className={"rounded-t-md"} />
            <div className={"flex flex-col items-center justify-center py-4 px-6 "}>
                <div className={"flex flex-row justify-between w-full"}>
                    <h3 className={"font-primary font-semibold text-black text-xl"}>{name}</h3>
                    <h3 className={"font-primary font-semibold text-primary text-xl"}>{price}</h3>

                </div>
                <p className={"mt-4 text-sm text-start text-muted-foreground"}>{description}</p>
            </div>
        </div>
    )
}