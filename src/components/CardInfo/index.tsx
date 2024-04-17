import { PropsWithChildren } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "../ui/card"
import Image, { StaticImageData } from "next/image"
import { cva } from "class-variance-authority"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"


interface Props {
    title: string
    // image: StaticImageData
    Icon: any
    description: string
    className?: string
    colorIcon?:string
}

export function CardList({ children }: PropsWithChildren) {
    return (
        <div className="lg:mx-36 my-16">{children}</div>
    )
}

export function CardItem({ title, Icon, description, className, colorIcon }: Props) {

    return (
        <Card className="w-80 h-96 border-none text-white bg-slate-800 flex flex-col justify-between" >
            <CardHeader >
                <h1 className="text-2xl mb-3">{title}</h1>
                <CardDescription className="text-white text-lg text-clip">{description}</CardDescription>
            </CardHeader>

            <CardContent className="flex justify-center ">
                <Icon size={150} color={colorIcon} />
            </CardContent>

        </Card>
    )
}


export default { CardList, CardItem }