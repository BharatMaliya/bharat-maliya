import React from 'react';
import Image from "next/image";

import patym_logo from '../../../public/assets/paytm.webp'
import amazone_logo from '../../../public/assets/amazone.png'
import meta_logo from "../../../public/assets/meta.png"
import styles from './Experience.module.scss'

const Experience = () => {
    return (
        <section className={styles.root}>
            <h1>Skills i draw from </h1>
            <div className={styles.rootExperiances}>
                <div className={styles.rootExperiancesExperiance}>
                    <Image src={patym_logo} alt={'patym_logo'}/>
                    <div className={styles.rootExperiancesExperianceDetail}>
                        <h3>Software Engineer-Intern</h3>
                    </div>
                </div>
                <div className={styles.rootExperiancesExperiance}>
                    <Image src={amazone_logo} alt={'amazone_logo'}/>
                    <div className={styles.rootExperiancesExperianceDetail}>
                        <h3>Software Development Engineer - I</h3>
                    </div>
                </div>
                <div className={styles.rootExperiancesExperiance}>
                    <Image src={meta_logo} alt={'meta_logo'}/>
                    <div className={styles.rootExperiancesExperianceDetail}>
                        <h3>Software Development Engineer - II</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;