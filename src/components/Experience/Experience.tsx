import React from 'react';
import Image from "next/image";

import patym_logo from '../../../public/assets/paytm.webp'
import amazone_logo from '../../../public/assets/amazone.png'
import styles from './Experience.module.scss'

const Experience = () => {
    return (
        <section className={styles.root}>
            <h1>Skills i acquired from </h1>
            <div className={styles.rootExperiances}>
                <div className={styles.rootExperiancesExperiance}>
                    <Image src={patym_logo} alt={'patym_logo'}/>
                    <div className={styles.rootExperiancesExperianceDetail}>
                        <h3>Software Engineer-Intern</h3>
                        <ul>
                            <li>Interned at Paytm, contributing to key projects and gaining hands-on experience in
                                various areas of fintech.
                            </li>
                            <li>Collaborated with a dynamic team, developed skills in scalable frontend development, and
                                contributed to notable achievements.
                            </li>
                            <li>
                                Enhanced problem-solving abilities and gained valuable insights into the digital finance
                                industry.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.rootExperiancesExperiance}>
                    <Image src={amazone_logo} alt={'amazone_logo'}/>
                    <div className={styles.rootExperiancesExperianceDetail}>
                        <h3>Software Development Engineer - I</h3>
                        <ul>
                            <li>
                                Ideated and developed an algorithm to recommend Amazon’s Choice items related to
                                customer’s incomplete missions
                            </li>
                            <li>
                                Developed a recommender using Collaborative Filtering to improve coverage of
                                complementary recommendations for 500 million products on Amazon
                            </li>
                            <li>
                                Implemented a recommender using Topic Modeling to group 50 million products into
                                homogenous topics
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;