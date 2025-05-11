import NavBar from "@/components/Navigation/NavBar";
import ExtendedNavMenu from "@/components/Navigation/ExapndedNavMenu";
import {NavBarProps} from "@/components/Navigation/NavBar.types";


export default function NavBarOpen({
    links
}:NavBarProps) {
    return (
        <div>
            <NavBar variant="collapsed"/>
            <ExtendedNavMenu variant="expanded" links={links}/>
        </div>
    )
}