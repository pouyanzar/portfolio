import React,{Component} from 'react';

export default function Footer(){

    return (
        <footer className="footer">
            <section id="ContactMe"><h2 className="section__title"> Contact Me</h2></section>
            <p>
                <a href="mailto:pouyan.zarbafian@hotmail.com">pouyan.zarbafian@hotmail.com</a>
            </p>
            <p className="footer__img">
                <a href="https://github.com/pouyanzar"><img src="/pic/github.png" alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/pouyan-zarbafian/"><img src="/pic/linkedin.png" alt="Linkedin"/></a>
                </p>
        </footer>
    )
}