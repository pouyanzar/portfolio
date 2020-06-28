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
                        {/* <p> also have completed some courses at Concordia Univeristy in Computer Science, including</p> */}
                        {/* <ul>
                            {this.state.skills.map((skill,i) => {
                            return<li className="li1" key={i}>{skill}</li>
                            })}
                        </ul>     */}
                    </div>
                        <p className="about__p">I am Pouyan Zarbafian, a graduate of BrainStation Full Stack Web Development Boot Camp(Fall 2018),<br/> where I learnt and deepened my understanding of the latest Web development tools and skills.</p>
                        <a className="button" href="/pouyan-zarbafian.pdf" download="Pouyan-Zarbafian-resume">Download my resume</a>
                    </div>
                </section>
                {/* <ul>At BrainStation, I also participated in some collaborative projects through which I learnt how to work with:
                    <li>Github</li>
                    <li>Jira</li>
                </ul>
                <ul>I also have completed some courses at Concordia Univeristy in Computer Science, including:
                    <li>Java Object Programming</li>
                    <li>Computer Organization and Assembly Language</li>
                    <li>Priciples of Data Structures</li>
                    <li>Operating Systems</li>
                    <li>Files and Databases</li>
                </ul> */}

            </div>
        )
    }
}

export default Aboutme