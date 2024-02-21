import React from 'react';
import styles from './Footer.module.scss'
import logo from '../../../public/assets/Bm.png'
import Image from "next/image";
import Button from "@/components/Button";
import X from '../../../public/Icons/X'
import Link from "next/link";
import Linkedin from "../../../public/Icons/Linkedin";
import Email from "../../../public/Icons/Email";
import Github from "../../../public/Icons/Github";
import Gitlab from "../../../public/Icons/Gitlab";

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerTop}>
                <h1>Start a project
                </h1>
                <h3>Interested in working together? We should queue up <br/> a time to chat. I’ll buy the coffee.
                </h3>
                <Link href={'/contact'}> <Button type={'secondary'} className={''}>Let's do this</Button></Link>
            </div>

            <div className={styles.footerContent}>
                <Image className={styles.footerContentLogo} src={logo} alt="Logo"/>
                <h2>Living, learning, & leveling up <br/> one day at a time.</h2>
                <div className={styles.footerContentSocials}>
                    <Link target={'_blank'} href="https://twitter.com/home?lang=en">
                        <X/>
                    </Link>
                    <Link target={'_blank'} href="https://www.linkedin.com/in/bharat-savadas-917983267">
                        <Linkedin/>
                    </Link>
                    <Link target={'_blank'} href="mailto:bharatmaliya100@gmail.com">
                        <Email/>
                    </Link>
                    <Link target={'_blank'} href="https://github.com/BharatMaliya">
                        <Github/>
                    </Link>
                    <Link target={'_blank'} href="https://gitlab.com/maliyabharat10">
                        <Gitlab/>
                    </Link>
                </div>

                <h3>
                    Handcrafted by me © {new Date().getFullYear()}
                </h3>
            </div>

        </footer>
    );
};

export default Footer;