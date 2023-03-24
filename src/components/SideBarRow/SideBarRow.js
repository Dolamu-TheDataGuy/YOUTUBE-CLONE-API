import React from 'react';
import '/SideBarRow.css';

const SideBarRow = ({selected, icon, title}) => {
    return (
        <div className={`sidebarrow ${selected ? 'selected': ''}`}>
            <icon className='sidebarrow_icon'/>
            <h2 className='sidebarrow_title'>{title}</h2>
        </div>
    )
}

export default SideBarRow;