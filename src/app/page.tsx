"use client";

import { CarouselInfo } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { Hr } from "@/components/Hr";


export default function Home() {
  const dataAtual = new Date();
 
  const dateInitialExperience = new Date("08/01/2023");
  const monthExperience =
    (dataAtual.getFullYear() - dateInitialExperience.getFullYear()) * 12 +
    (dataAtual.getMonth() - dateInitialExperience.getMonth());

  return (
    <main className="overflow-x-hidden ">
      <Header />
      <Hr title="Tecnologias que conheço" />
      <CarouselInfo/>
    </main>
  );
}
