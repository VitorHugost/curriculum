import Link from "next/link";
import { PropsWithChildren } from "react";

interface Props {
  Icon: any;
  href: string;
}

function Root({children}:PropsWithChildren){
  return(
    <div className="flex gap-3 my-4 ">
      {children}
    </div>
  )
}

function ContactItem({ Icon, href }: Props) {
  return (
    <Link href={href}>
      <Icon size={20} />
    </Link>
  );
}

export const ContactList = {Root,ContactItem}
