"use client";

import { ChartPie } from "@/components/ChartPie";
import { Header } from "@/components/Header";

export default function Home() {
  const dataAtual = new Date();
  const data = [
    {
      name: "Java JRE e JDK: compile e execute o seu programa",
      progress: 100,
    },
    { name: "JavaScript: Arrays", progress: 100 },

    {
      name: "HTML5 e CSS3 parte 1: crie uma página da Web",
      progress: 100,
    },
    {
      name: "HTML e CSS: Classes, posicionamento e Flexbox",
      progress: 100,
    },
    {
      name: "HTML e CSS: cabeçalho, footer e variáveis CSS",
      progress: 100,
    },
    {
      name: "HTML5 e CSS3 parte 2: posicionamento, listas e navegação",
      progress: 100,
    },
    {
      name: "React: desenvolvendo com JavaScript",
      progress: 15,
    },
    {
      name: "Business Intelligence: trabalhando com Data Warehouse",
      progress: 100,
    },
    { name: "SQL com MySQL: manipule e consulte dados", progress: 100 },
    {
      name: "Power BI Desktop: construindo meu primeiro dashboard",
      progress: 100,
    },
    {
      name: "Apache Airflow: orquestrando seu primeiro pipeline de dados",
      progress: 100,
    },
  ];
  const dateInitialExperience = new Date("08/01/2023");
  const monthExperience =
    (dataAtual.getFullYear() - dateInitialExperience.getFullYear()) * 12 +
    (dataAtual.getMonth() - dateInitialExperience.getMonth());

  return (
    <main className="overflow-x-hidden">
      <Header />
      {/* <div className="px-8">
        <div className="text-center">
          <p className="text-5xl text-center mt-[-25px] mb-4">Perfil</p>
          <p className="text-2xl mb-8">
            Programador júnior com {monthExperience} meses de experiência em
            desenvolvimento front-end.
          </p>
        </div>
        {data.map((element) => (
          <CardInfo key={element.name} data={element} />
        ))}
      </div> */}
    </main>
  );
}

function CardInfo({ data }: { data: { name: string; progress: number } }) {
  const { name, progress } = data;
  return (
    <div className="bg-slate-950 mb-8 rounded-md flex">
      <ChartPie progress={progress} />
      <div className="py-8">
        <h1 className="text-3xl">{name}</h1>
      </div>
    </div>
  );
}
