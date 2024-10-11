import React from 'react';
import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";

const DesktopNavigation = ({navLinks}: { navLinks: any }) => {
    return (
        // <NavigationMenu className={'w-full flex max-w-[85rem] bg-red-500 mx-auto'}>
        <NavigationMenu className="mr-4 hidden gap-2 md:flex">
            <Image src='/logo.png' width={250}
                   height={250} alt={'test'}/>
            <NavigationMenuList>
                {navLinks.map((navLink) =>
                    <Link key={navLink.id} href={navLink.url} legacyBehavior passHref>
                        <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}>{navLink.name}</NavigationMenuLink>
                    </Link>
                )}
            </NavigationMenuList>


        </NavigationMenu>
    );
};

export default DesktopNavigation;