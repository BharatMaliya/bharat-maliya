import React from 'react';
import Link from "next/link";
import logo from "../../public/assets/Bm.png"
import Image from "next/image";
import styles from "./Baselayout.module.scss"
interface BaseLayoutProps {
    children: React.ReactNode;
    className?: string;
}
const BaseLayout = ({ children, className }: BaseLayoutProps) => {
    return (
        <React.Fragment>
            <header className={styles.header} >
                <Image height={24} width={24} src={logo} alt={'logo'}/>
                <ul>
                    <li>
                        <Link href={'#home'}> Home </Link>
                    </li>
                </ul>
            </header>
            {children}
        </React.Fragment>
    );
};


export default BaseLayout;