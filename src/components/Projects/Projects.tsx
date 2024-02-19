import React from 'react';
import styles from "./Projects.module.scss"

const Projects = () => {
    return (
        <section className={styles.root}>
            <div className={styles.rootTop}>
                <div className={styles.rootTopTexBox}>
                    <h1>Some of my recent work.
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
                <div className={styles.rootBottomProjects}>
                    <div className={styles.rootBottomProjectsProject}>


                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
