import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarMenu, 
    SidebarLink, 
    SideBtnWrap, 
    SidebarRoute 
} from './SidebarElements';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <AnchorLink href='#brazil'></AnchorLink>
                <SidebarLink to="/">
                    Pizzas 🇧🇷 🇵🇹 🇬🇧 🇺🇸 🇩🇪 🇪🇺                
                </SidebarLink>
                <SidebarLink to="/">
                    Sobremessa 🍮
                </SidebarLink>
                <SidebarLink to="/">Menu Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Peça agora</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
