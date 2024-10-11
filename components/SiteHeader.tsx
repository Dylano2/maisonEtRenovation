import React from 'react';
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation";

const SiteHeader = () => {
    const navLinks = [{
        id: '1',
        name: "Accueil/Présenation",
        url: "/home",
    }, {
        id: '2',
        name: "Prestation",
        url: "/prestation",
    }, {
        id: '3',
        name: "Réalisation",
        url: "/login",
    }]
    return (
        <>
            <DesktopNavigation navLinks={navLinks}/>
            <MobileNavigation navLinks={navLinks}/>
        </>
    );
};

export default SiteHeader;