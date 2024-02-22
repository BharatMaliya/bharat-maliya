import React from 'react';
import styles from "./Projects.module.scss"
import Image from "next/image";
import link_logo from '../../../public/assets/link.svg'
import base_lair from '../../../public/assets/baselair.svg'
import auto_malog from '../../../public/assets/automalog.svg'
import bootstrap_logo from "../../../public/assets/bootstraplogos.svg"
import basin_logo from "../../../public/assets/basin.svg"
import shipable_logo from "../../../public/assets/shipable.svg"
import tripkliq from "../../../public/assets/tripkliq_logo.svg"

const Projects = () => {

    const projects = [
        {
            logo: base_lair,
            description: 'Community platform for miniature painters to learn, connect, and showcase work.',
            link: 'https://thebaselair.com/',
            linkName: 'thebaselair.com'
        },
        {
            logo: auto_malog,
            description: 'AI-driven changelog that turns git commits into release notes, instantly.',
            link: 'https://automalog.com/',
            linkName: 'automalog.com'
        }, {
            logo: bootstrap_logo,
            description: 'Affordable, human-crafted logos for startups and indie projects.',
            link: 'https://bootstraplogos.com/',
            linkName: 'bootstraplogos.com'
        }, {
            logo: basin_logo,
            description: 'A powerful, easy-to-configure form backend for designers and developers.',
            link: 'https://usebasin.com/',
            linkName: 'usebasin.com'
        }, {
            logo: shipable_logo,
            description: 'Community platform for miniature painters to learn, connect, and showcase work.',
            link: 'https://thebaselair.com/',
            linkName: 'thebaselair.com'
        }, {
            logo: tripkliq,
            description: 'Ai powered trip planning and trip sharing platform',
            link: 'https://www.tripkliq.com/',
            linkName: 'in development'
        }
    ]

    return (
        <section id={'home'} className={styles.root}>
            <div className={styles.rootTop}>
                <div className={styles.rootTopTexBox}>
                    <h1>Some of my recent work.
                    </h1>
                    <p>
                        {" With 4 years of experience, I've worked remotely for agencies, consulted for startups, and collaborated on digital products. I've interned at Paytm and held positions at Amazon and Meta. Confident and curious, I'm always improving my skills."}
                    </p>
                </div>
            </div>
            <div className={styles.rootBottom}>
                <div className={styles.rootBottomProjects}>
                    {projects.map((item, i) => (
                        <ProjectCard key={i} {...item}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

//mini sub-components
interface ProjectCardProps {
    logo: string;
    description: string;
    link: string;
    linkName: string

}

const ProjectCard = ({logo, description, link, linkName}: ProjectCardProps) => {

    return (
        <div className={styles.rootBottomProjectsProject}>
            <Image className={styles.rootBottomProjectsProjectLogo} src={logo} alt={'base-lair'}/>
            <p className={styles.rootBottomProjectsProjectDesc}>{description}</p>
            <div className={styles.rootBottomProjectsProjectLink}>
                <Image src={link_logo} alt={'link_logo'}/>
                <a target={'_blank'} href={link}>{linkName}</a>
            </div>
        </div>
    )
}
