import React from 'react';
import Link from "next/link";
import logo from "../../public/assets/Bm.png"
import Image from "next/image";
import styles from "./Baselayout.module.scss"
import Button from "@/components/Button";

interface BaseLayoutProps {
    children: React.ReactNode;
    className?: string;
}

const BaseLayout = ({children, className}: BaseLayoutProps) => {
    return (
        <React.Fragment>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <Link href={'/'}> <Image src={logo} alt={'logo'}/></Link>
                    <ul>
                        <li>
                            <Link href={'/'}> BM </Link>
                        </li>
                        <li><Link href={'/contact'}> <Button>Say Hello</Button> </Link></li>
                    </ul>
                </div>
            </header>
            {children}
        </React.Fragment>
    );
};


export default BaseLayout;