import Link from "next/link";

interface Props {
  Icon: any;
  href: string;
}

export function ListContact({ Icon, href }: Props) {
  return (
    <Link href={href}>
      <Icon size={20} />
    </Link>
  );
}
