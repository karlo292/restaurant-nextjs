import {FaStar} from "react-icons/fa6";
import {Image} from "next/dist/client/image-component";

export default function Review({ stars, review, name, role, imageUrl }: { stars: number; review: string; name: string; role: string; imageUrl: string; }) {
    return (
        <div className={"max-h-97.5 border p-8 flex flex-col gap-4 justify-between border-border bg-white w-full h-full max-w-86.5 rounded-md"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-row gap-2 justify-start"}>
                    {[...Array(stars)].map((_, index) => (<FaStar key={index} width={20} height={20} className={"text-accent"} />))}
                </div>
                <p className={"text-start"}>&#34;{review}&#34;</p>
            </div>
            <div>
                <div className={"flex flex-row items-center gap-4 mt-4"}>
                    <Image src={imageUrl} width={50} height={50} alt={name + " image"} className={"rounded-full"} />
                    <div className={"flex flex-col text-start"}>
                        <h3 className={"font-primary font-semibold text-black"}>{name}</h3>
                        <p className={"text-sm text-muted-foreground"}>{role}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}