import { CssFill, GithubFill, HtmlFill, JavascriptFill, ReactFill } from "akar-icons";
import CardInfo from "../CardInfo";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export function CarouselInfo() {

    const dataMockup = [
        {
            title:"HTML 5",
            description:"Sou capaz de utilizar de forma eficaz os recursos avançados do HTML 5.",
            icon:{
                color:"#E8602C",
                icon:HtmlFill
            }
        },
        {
            title:"CSS 3",
            description:"Tenho habilidade em CSS3, o que me permite estilizar páginas web de forma responsiva.",
            icon:{
                color:"#3BABDC",
                icon:CssFill
            }
        },
        {
            title:"Javascript",
            description:"Possuo conhecimento intermediário em JavaScript, o que me permite criar interatividade em páginas web.",
            icon:{
                color:"#F0DA50",
                icon:JavascriptFill
            }
        },
        {
            title:"React",
            description:"Tenho conhecimento em um dos Frameworks mais utilizado no mercado.",
            icon:{
                color:"#08D8FE",
                icon:ReactFill
            }
        },
        {
            title:"React Native",
            description:"Possuo conhecimento em React Native, para o desenvolvimento de aplicações mobile.",
            icon:{
                color:"#08D8FE",
                icon:ReactFill
            }
        },
        {
            title:"Git",
            description:"Tenho experiência em gerenciar versionamento de código utilizando o Git.",
            icon:{
                color:"#F35530",
                icon:GithubFill
            }
        },

    ]
    return (

        <CardInfo.CardList>
            <Carousel className="w-fullbg-red-400" opts={{ loop: true }} plugins={[
                Autoplay({
                    delay: 2000,
                    stopOnInteraction: false
                }),
            ]}>
                <CarouselContent>
                    {dataMockup.map((e,i)=>(
                    <CarouselItem className=" lg:basis-1/3 2xl:basis-1/4 flex justify-center"  key={i}>
                        <CardInfo.CardItem
                            colorIcon={e.icon.color}
                            title={e.title}
                            Icon={e.icon.icon}
                            description={e.description} />
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="bg-slate-800 text-white border-none"  />
                <CarouselNext className="bg-slate-800 text-white border-none" />
            </Carousel>
        </CardInfo.CardList>
    )
}