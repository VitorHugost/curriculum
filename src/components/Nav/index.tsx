import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";

export function Nav() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6 p-6 bg-slate-950">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre mim</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projetos</NavigationMenuTrigger>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Conhecimentos</NavigationMenuTrigger>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
