import React from 'react';
import styles from "./about.module.scss"
import Image from "next/image";
import ts from '../../../public/assets/skills/typescript.png'
import js from '../../../public/assets/skills/js.png'
import py from '../../../public/assets/skills/python.png'
import dj from '../../../public/assets/skills/django.png'
import react from '../../../public/assets/skills/physics.png'
import next from '../../../public/assets/skills/next.png'
import html from '../../../public/assets/skills/html.png'
import css from '../../../public/assets/skills/css-3.png'
import bootstrap from '../../../public/assets/skills/bootstrap.png'
import git from '../../../public/assets/skills/merge.png'
import github from '../../../public/assets/skills/github.png'
import node from '../../../public/assets/skills/node-js.png'
import express from '../../../public/assets/skills/ex.png'
import mongo from '../../../public/assets/skills/mongo.png'
import psotgres from '../../../public/assets/skills/postgress.png'
import ml from '../../../public/assets/skills/ml.png'
import ai from '../../../public/assets/skills/ai.png'
import image_processing from '../../../public/assets/skills/image-processing.png'
import com_vis from '../../../public/assets/skills/computer.png'


const About = () => {
    return (
        <section className={styles.root}>
            <div className={styles.rootTop}>
                <div className={styles.rootTopTexBox}>
                    <h1>Hi, I’m Bharat. Nice to meet you.
                    </h1>
                    <p>
                        Computer Science graduate from NIT Surat with a strong foundation in programming and
                        problem-solving. Adept at Javascript, Python, and web development technologies. I bring a
                        passion for
                        innovation and a proactive approach to challenges. Eager to leverage my education and skills to
                        contribute effectively in a dynamic work environment.
                    </p>
                </div>
            </div>
            <div className={styles.rootBottom}>
                <h2>Skills I Have Acquired / Am Acquiring</h2>
                <div className={styles.rootBottomSkills}>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3>I am best at</h3>
                        <div className={styles.rootBottomSkillsSkillTwo}>
                            <ul>
                                <li><Image src={ts} alt={''}/> <span> Typescript</span></li>
                                <li><Image src={js} alt={''}/> <span> Javascript </span></li>
                                <li><Image src={py} alt={''}/> <span> Python </span></li>
                                <li><Image src={react} alt={''}/> <span> React Js </span></li>
                                <li><Image src={next} alt={''}/> <span> Next Js </span></li>
                            </ul>
                            <ul>
                                <li><Image src={html} alt={''}/> <span> HTML </span></li>
                                <li><Image src={css} alt={''}/> <span> CSS/SCSS/SASS </span></li>
                                <li><Image src={bootstrap} alt={''}/> <span> Bootstrap/Tailwind Css </span></li>
                                <li><Image src={git} alt={''}/> <span> Git </span></li>
                                <li><Image src={github} alt={''}/> <span> Github/Gitlab </span></li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3> I am familiar with</h3>
                        <ul>
                            <li><Image src={node} alt={''}/> <span> Node js </span></li>
                            <li><Image src={express} alt={''}/> <span> Express js </span></li>
                            <li><Image src={mongo} alt={''}/> <span> Mongo DB </span></li>
                            <li><Image src={dj} alt={''}/> <span> Django </span></li>
                            <li><Image src={psotgres} alt={''}/> <span> Postgres Sql </span></li>
                        </ul>
                    </div>
                    <div className={styles.rootBottomSkillsSkill}>
                        <h3>I wants to learn</h3>
                        <ul>
                            <li><Image src={ml} alt={''}/> <span> Machine learning </span></li>
                            <li><Image src={ai} alt={''}/> <span> Artificial intelligence </span></li>
                            <li><Image src={image_processing} alt={''}/> <span> Image Processing </span></li>
                            <li><Image src={com_vis} alt={''}/> <span> Computer vision </span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;