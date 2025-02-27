"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import UserTools from "./UserTools"
import Link from "next/link"
export default function HeaderMenu() {
  return (
    <div className="h-16 flex w-full items-center justify-between gap-2 px-4 py-2 border-b-2 shadow-sm">
      <NavigationMenu>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenu>
      <UserTools />
    </div>
  )
}
