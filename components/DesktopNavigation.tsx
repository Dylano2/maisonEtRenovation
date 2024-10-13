import React from "react"
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

const DesktopNavigation = ({ navLinks }: { navLinks }) => {
  return (
    <>
      <NavigationMenu className="px-4 mr-4 max-w-full hidden justify-between w-full gap-2 md:flex">
        <Image className="py-1" src="/logo.png" width={250}
               height={250} alt="Logo Maison & Renovation" />
        <div className={"flex"}>
          <NavigationMenuList>
            {navLinks.map((navLink) =>
              <Link key={navLink.id} href={navLink.url} legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}>{navLink.name}</NavigationMenuLink>
              </Link>
            )}
          </NavigationMenuList>
        </div>
      </NavigationMenu>
      <Separator style={{ backgroundColor: "aqua" }} />
    </>
  )
}

export default DesktopNavigation