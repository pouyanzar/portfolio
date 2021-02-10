import React, {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default class Menu extends Component{

    
    state = {
        menus: ["About Me", "Skills","Projects",  "Contact Me"]
    }

//    menuBuilder = this.menuBuilder.bind(); 

   
    render(){

        // const menuBuilder = () => {
            
        
        return (
           <section className="header" >
               <div className="menu" id="Menu">
                   <a href="https://www.pouyanz.com">Home</a>
                   {this.state.menus.map((menu,index)=>{
                    let anchor = `#${menu}`.replace(/\s/g,'');
                    return(
                        
                            <AnchorLink href={anchor} key={index}>{menu}</AnchorLink>
                        
                    )
                })}
            </div>
         </section>
        )
    }
}