import React from 'react';
import styles from './Button.module.scss'
import Image from "next/image";

interface ButtonProps {
    children: React.ReactNode;
    leadingIcon?: string
    type?: 'primary' | 'secondary';
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({children, leadingIcon, type = 'primary', className, onClick}: ButtonProps) => {

    const buttonStyles = `${styles.btn} ${type === 'primary' ? styles.primary : styles.secondary} ${className}`

    return (
        <button onClick={onClick && onClick} className={buttonStyles}>
            {leadingIcon && <Image src={leadingIcon} alt='Button'/>}
            <span>{children}</span>
        </button>
    );
};

export default Button;