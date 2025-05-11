import {NavBarProps} from "@/components/Navigation/NavBar.types";
import Link from "next/link";
import {Button} from "@/components/Button";
import React from "react";
import { NavBarVariants } from "@/components/Navigation/NavBar.variants";


export default function ExtendedNavMenu({
    variant = "expanded",
    links = [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: 'Blog', href: "#"}],
                                        }: NavBarProps) {

    const buttonStyle = NavBarVariants[variant].button;

    return (
        <>
            <div className="flex flex-col">
                {links.map((link) => {
                    return (
                        <Link key={link.label} href={link.href}>{link.label}</Link>
                    )
                })}
                <Button className={`${buttonStyle}`} variant={"outline"}>
                    Download
                </Button>
            </div>
        </>
    )
}