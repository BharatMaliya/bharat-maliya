import React from 'react';
import styles from "./Hero.module.scss"
import Image from "next/image";

import happy_developer from "../../../public/assets/happy-dev.svg"
import dev_setup from "../../../public/assets/dev-setup.svg"

const Hero = () => {
    return (
        <section className={styles.root}>
            <h1>Fullstack Developer and a Mentor </h1>
            <h3>I develop masterpieces by code, and I love what I do. </h3>

            <div>
                <Image className={styles.happy_dev} src={happy_developer} alt={'happy_developer'}/>
            </div>
            <Image className={styles.dev_setup} src={dev_setup} alt={'dev_setup'}/>
        </section>
    );
};

export default Hero;