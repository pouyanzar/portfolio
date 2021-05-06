import React from 'react';

export default function Modal({hide, display}) {
    const menus = ["About Me", "Skills","Projects",  "Contact Me"];

    return (
        <div style={{display: display ? "block" : "none"}} className="modal">
            
            <p onClick={() => hide()}>X</p>
            {menus.map((menu,index)=>{
                let anchor = `#${menu}`.replace(/\s/g,'');
                return(
                     <a href={anchor} key={index} onClick={() => hide()}>{menu}</a>
                )
            })}
           
        </div>
    )
}
