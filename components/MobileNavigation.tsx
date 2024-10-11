import React, {useState} from 'react';
import {Sheet, SheetContent, SheetTrigger,} from "@/components/ui/sheet"
import {Button} from "@/components/ui/button"
import {MenuIcon} from "lucide-react";

const MobileNavigation = ({navLinks}) => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>

            {/* This button will trigger open the mobile sheet menu */}
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <MenuIcon/>
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <div className="flex flex-col items-start">
                    {navLinks.map((item, index) => (
                        <Button
                            key={index}
                            variant="link"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>
            </SheetContent>

        </Sheet>
    );
};

export default MobileNavigation;