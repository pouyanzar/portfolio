import React, {Component} from 'react'

class Aboutme extends Component{
    state={
        skills:['HTML', 'CSS3', 'SASS', 'JS', 'Node.js', 'React', 'API', 'MySql', 'Sequelize' ]
    }
    render(){
        return(
            <div className="about">
                <section id="AboutMe">
                    <div className="about__text">
                        <h2 className="section__title">About Me</h2>
                    <div className="profile1">
                        <img className="profile1__pic" src="/pic/pouyan.jpg" alt="Pouyan Zarbafian"/>
                    </div>
                        <p className="about__p">I am Pouyan Zarbafian, an alumni of Concordia Universiry in Computer Science, and LightHouse Labs alumni in Web development. I also graduated from BrainStation College as a Full Stack Web Developer in 2018.<br/> According to my education, I learned and deepened my understanding of the latest web development tools and skills.</p>
                        <a className="button" href="/pouyan-zarbafian.pdf" download="Pouyan-Zarbafian-resume">Download my resume</a>
                    </div>
                </section>

            </div>
        )
    }
}

export default Aboutme