import React from 'react';
import styles from "./about.module.scss"

const About = () => {
    return (
        <section className={styles.root}>
            <div className={styles.rootTop}>
                <div className={styles.rootTopTexBox}>
                    <h1>Hi, I’m Bharat. Nice to meet you.
                    </h1>
                    <p>
                        Since beginning my journey as a freelance designer 12 years ago, I've done remote work for
                        agencies, consulted for startups, and collaborated with talented people to create digital
                        products for both business and consumer use. I'm quietly confident, naturally curious, and
                        perpetually working on improving my chops.
                    </p>
                </div>
            </div>
            <div className={styles.rootBottom}>
                <h2>Skill set i have acquired / acquiring</h2>
                <div className={styles.rootBottomSkills}>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3>I am best at</h3>
                        <ul>
                            <li>Typescript</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>React Js</li>
                            <li>Next Js</li>
                            <li>HTML</li>
                            <li>CSS/SCSS/SASS</li>
                            <li>Bootstrap/Tailwind Css</li>
                            <li>Git</li>
                            <li>Github/Gitlab</li>
                        </ul>
                    </div>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3> I am familiar with</h3>
                        <ul>
                            <li>Node js</li>
                            <li>Express js</li>
                            <li>Mongo DB</li>
                            <li>Django</li>
                            <li>Postgres Sql</li>
                        </ul>
                    </div>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3>I wants to learn</h3>
                        <ul>
                            <li>Machine learning</li>
                            <li>Artificial intelligence</li>
                            <li>Image Processing</li>
                            <li>Computer vision</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;