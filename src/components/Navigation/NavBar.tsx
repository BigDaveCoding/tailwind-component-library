import React from "react";
import {NavBarProps} from "@/components/Navigation/NavBar.types";
import {NavBarVariants} from "@/components/Navigation/NavBar.variants";
import Link from "next/link";
import {Button} from "@/components/Button";

export default function NavBar({
    children,
    title = "Tailwind CSS",
    variant = "default",
    links = [{label: "Docs", href: "#"}, {label: "Examples", href: "#"}, {label: 'Blog', href: "#"}],
   ...props
}: NavBarProps) {

    const baseNavContainerStyle: string = 'px-4 flex items-center text-center';
    const navContainerStyle = NavBarVariants[variant].navContainer;
    const logoStyle = NavBarVariants[variant].logo;
    const titleStyle = NavBarVariants[variant]['title'];
    const linkContainerStyle = NavBarVariants[variant].linkContainer;
    const buttonStyle = NavBarVariants[variant].button;

    return (
        <>
            <nav className={`${baseNavContainerStyle} ${navContainerStyle}`}>

                <div className={"flex items-center mr-auto"}>
                    <div className={`flex items-center text-center gap-2`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className={`${logoStyle}`}>
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                        </svg>
                        <h1 className={`${titleStyle}`}>{title}</h1>
                    </div>

                    {variant === "default" &&
                        <div className={`flex ${linkContainerStyle}`}>
                        {links.map((link, index) => {
                            return (
                                <Link key={index} href={link.href} className={`text-green2 font-light`}>{link.label}</Link>
                            )
                        })}
                        </div>
                    }
                </div>
                <div className={"ml-auto"}>
                    <Button className={`${buttonStyle}`} variant={"outline"}>
                        {variant === "default"
                            ? "Download"
                            : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </Button>
                </div>
            </nav>
        </>
    )
}