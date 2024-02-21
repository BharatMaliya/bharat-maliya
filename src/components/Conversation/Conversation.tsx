import React from 'react';
import styles from './Conversation.module.scss'
import Button from "@/components/Button";
import Link from "next/link";

const Conversation = () => {
    return (
        <section className={styles.root}>
            <h2>Interested in collaborating with me?
            </h2>
            <h3>I am always open to discussing product development work or exploring partnership opportunities.
            </h3>
            <Link href={'/contact'}> <Button className={styles.rootBtn}>Start a conversation</Button></Link>
        </section>
    );
};

export default Conversation;