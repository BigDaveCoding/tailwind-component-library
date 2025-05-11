import {NavBarProps} from "@/components/Navigation/NavBar.types";
import Link from "next/link";


export default function ExtendedNavMenu({
    children,
    links = [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: 'Blog', href: "#"}],
                                        }: NavBarProps) {
    return (
        <>
            <div className="flex flex-col">
                {links.map((link) => {
                    return (
                        <Link key={link.label} href={link.href}>{link.label}</Link>
                    )
                })}
            </div>
        </>
    )
}