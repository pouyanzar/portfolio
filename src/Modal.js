import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Modal({hide, display}) {
    const menus = ["About Me", "Skills","Projects",  "Contact Me"];

    return (
        <div style={{display: display ? "block" : "none"}} className="modal">
            
            <p onClick={() => hide()}>X</p>
            {menus.map((menu,index)=>{
                let anchor = `#${menu}`.replace(/\s/g,'');
                return(
                     <AnchorLink href={anchor} key={index} onClick={() => hide()}>{menu}</AnchorLink>
                )
            })}
           
        </div>
    )
}
