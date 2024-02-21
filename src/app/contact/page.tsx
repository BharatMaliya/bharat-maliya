"use client"

import React, {useCallback} from 'react';
import styles from './Contact.module.scss'
import Image from "next/image";
import dev_logo from '../../../public/assets/happy-dev.svg'
import {sendContactForm} from "@/lib/api";
import Button from "@/components/Button";
import {contactBodyTypes} from "@/common/types";

const initial_data = {
    name: '',
    email: '',
    message: ''
}

const Page = () => {
    const [contact, setContact] = React.useState<contactBodyTypes>(initial_data);
    const [loader, setLoader] = React.useState(false);
    const [error, setError] = React.useState<contactBodyTypes>(initial_data);
    const [success, setSuccess] = React.useState(false);


    const sendMsg = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let flag = false
        Object.entries(contact).forEach(([key, value]) => {
            if (!value) {
                flag = true
                setError(prev => ({...prev, [key]: `${key} required`}));
            }
        })

        if (flag) {
            return;
        }

        setLoader(true)
        const res = await sendContactForm(contact);
        setLoader(false)
        setSuccess(true)
    }, [contact])

    const handleOnchange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setContact(prev => ({...prev, [name]: value}))
        setError(prev => ({...prev, [name]: ''}))
    }, [])

    return (

        <div className={styles.root}>
            <Image src={dev_logo} alt={'dev_logo'}/>
            <h1>Thanks for taking the time to reach out. <br/>How can I help you today?</h1>
            {
                success ? <div className={styles.rootSuccess}>
                        <h3>I received you message, i will get back to you soon!</h3>
                    </div> :
                    <form className={styles.rootForm}>
                        <div className={styles.rootFormTop}>
                            <div className={styles.rootFormInput}>
                                <label htmlFor="name">Name</label>
                                <input onChange={handleOnchange} name={'name'} value={contact.name}
                                       type={'text'}
                                       placeholder={'Name'}/>
                                {error.name && <small>{error.name}</small>}
                            </div>
                            <div className={styles.rootFormInput}>
                                <label htmlFor="name">Email</label>
                                <input onChange={handleOnchange} name={'email'} value={contact.email}
                                       type={'email'}
                                       placeholder={'Email'}/>
                                {error.email && <small>{error.email}</small>}
                            </div>
                        </div>
                        <div className={styles.rootFormInput}>
                            <label htmlFor="email">Message</label>
                            <textarea onChange={handleOnchange} id="message" value={contact.message}
                                      placeholder={'Enter message'} name="message" rows={4}
                                      cols={50}></textarea>
                            {error.message && <small>{error.message}</small>}
                        </div>
                        <Button onClick={sendMsg}
                                className={styles.rootFormBtn}>{loader ? 'Sending...' : 'Submit'}</Button>
                    </form>
            }
        </div>
    );
};

export default Page;