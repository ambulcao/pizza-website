import React from 'react';
import { 
    SidebarContainer
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}/> 
    )
}

export default Sidebar
