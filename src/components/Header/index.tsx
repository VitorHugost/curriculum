"use client";
import {
  Envelope,
  GithubFill,
  InstagramFill,
  LinkedinFill,
  Location,
  WhatsappFill,
} from "akar-icons";
import { ComponentProps } from "react";
import { ListInfo } from "../ListInfo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import { ListContact } from "../ListContact";

export function Header() {
  return (
    <header className="bg-gradient-to-t bg-gray-950 from-slate-900 lg:px-14 gap-28 px-8">
      <section className="flex flex-wrap h-full items-center justify-center">
        <div className="w-[600px] ">
          <HeaderTextComponent className="mb-4" />
          <ListInfo label="vitor.ribeiro.ro.pb@gmail.com" Icon={Envelope} />
          <ListInfo label="(+55) 69 98161-4659" Icon={WhatsappFill} />
          <ListInfo label="Pimenta Bueno, Rondônia" Icon={Location} />
          <div className="flex gap-3 my-4">
            <ListContact
              Icon={InstagramFill}
              href="https://www.instagram.com/vitor__hugo111/"
            />
            <ListContact
              Icon={GithubFill}
              href="https://github.com/VitorHugost"
            />
            <ListContact
              Icon={LinkedinFill}
              href="https://www.linkedin.com/in/vitor-hugo-ferreira-ribeiro-635079240/"
            />
          </div>
        </div>
        <AvatarComponent className="flex flex-1 justify-center" />
      </section>
    </header>
  );
}

function HeaderTextComponent({ ...rest }: ComponentProps<"div">) {
  const [text] = useTypewriter({
    words: ["Programador junior", "Desenvolvedor Web"],
    loop: 0,
  });
  return (
    <div {...rest}>
      <p className="text-gray-600 text-2xl"> - Me chamo Vitor Hugo</p>
      <div className="mb-8 mt-4">
        <span className="uppercase text-2xl sm:text-5xl whitespace-nowrap">
          {text}
          <Cursor />
        </span>
      </div>
    </div>
  );
}

function AvatarComponent({ ...rest }: ComponentProps<"div">) {
  return (
    <div {...rest}>
      <Avatar className="h-30 w-96 border-8 border-black">
        <AvatarImage src="https://github.com/Vitorhugost.png" />
        <AvatarFallback>Me image</AvatarFallback>
      </Avatar>
    </div>
  );
}
