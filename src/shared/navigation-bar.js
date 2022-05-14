import { Logo } from "./logo";
import { MenuIcon } from "./menu-icon";
import { ProfileImage } from "./profile-image";
import { Row } from "./row";
import { SearchIcon } from "./search-icon";

export function NavigationBar() {
    return <Row gap={10} alignCenter justifyBetween borderBottom paddingVertical={20} >
        <MenuIcon />
        <Logo />
        <Row alignCenter widthFitContent gap={20}>
            <SearchIcon />
            <ProfileImage />
        </Row>
    </Row>
}