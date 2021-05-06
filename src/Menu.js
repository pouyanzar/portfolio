import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Menu({show}){
 
    const menus = ["About Me", "Skills","Projects",  "Contact Me"];
    
        return (
           <section className="header" id="header">
               <div className="menu">
                <a href="#header" className="menu__button" onClick={() => show()}>
                    <div class="menu__button--bar"></div>
                    <div class="menu__button--bar"></div>
                    <div class="menu__button--bar"></div>
                </a>
                {menus.map((menu,index)=>{
                let anchor = `#${menu}`.replace(/\s/g,'');
                return(
                    <AnchorLink className="menu__link" href={anchor} key={index}>{menu}</AnchorLink>
                )
                })}
                </div>
           </section>
        )
}