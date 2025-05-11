import {NavBarProps} from "@/components/Navigation/NavBar.types";
import Link from "next/link";
import {Button} from "@/components/Button";
import React from "react";
import { NavBarVariants } from "@/components/Navigation/NavBar.variants";


export default function ExtendedNavMenu({
    links = [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: 'Blog', href: "#"}],
    }: NavBarProps) {

    const buttonStyle = NavBarVariants['expanded'].button;
    const linkTextStyle = NavBarVariants['expanded'].linkText;

    return (
        <div className={`bg-green5 w-[375px] p-4 flex flex-col gap-4`}>
            {links.map((link) => {
                return (
                    <Link className={`${linkTextStyle}`} key={link.label} href={link.href}>{link.label}</Link>
                )
            })}
            <div>
                <Button className={`${buttonStyle}`} variant={"outline"}>
                    Download
                </Button>
            </div>
        </div>
    )
}