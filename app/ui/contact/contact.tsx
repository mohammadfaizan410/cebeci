"use client"
import { useState } from 'react';
import styles from './contact.module.css'
import Link from 'next/link';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [sendingError, setSendingError] = useState(false);

    const handleSubmit = async () => {
        setNameError('');
        setEmailError('');
        setMessageError('');
        let hasError = false;

        if (form.name === '') {
            setNameError('Name is required');
            hasError = true;
        }
        if (form.email === '') {
            setEmailError('Email is required');
            hasError = true;
        }
        if (form.message === '') {
            setMessageError('Inquiry is required');
            hasError = true;
        }

        if (hasError) return;
        try {
            setSending(true);
            const response = await fetch('/api/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: `
                        You have a new inquiry from ${form.name}
                        Email: ${form.email}
                        Inquiry: ${form.message}
                        `
                })
            });

            if (response.ok) {
                setForm({ name: '', email: '', message: '' });
                setSending(false);
                setSent(true);
            } else {
                setSending(false);
                setSendingError(true);
            }
        } catch (error) {
            setSending(false);
            setSendingError(true);
        }
    };

    if(sending) return (
        <div className={styles.loadingContainer}>
            <h1>Your Email is being sent...</h1>
        </div>
    );

    if(sent) return (
        <div className={styles.loadingContainer}>
            <h1>We have successfully received your email</h1>
            <Link href="/products">
                <h3>Browse Products</h3>
            </Link>
        </div>
    );

    if(sendingError) return (
        <div className={styles.loadingContainer}>
            <h1>Failed to send email</h1>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>Contact Us</h1>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>Name</h3>
                        <h3 className={styles.error}>{nameError}</h3>
                    </div>
                    <input
                        type="text"
                        id="name"
                        className={styles.input}
                        placeholder="Enter Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>Email</h3>
                        <h3 className={styles.error}>{emailError}</h3>
                    </div>
                    <input
                        type="text"
                        id="email"
                        className={styles.input}
                        placeholder="Enter Email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>Inquiry</h3>
                        <h3 className={styles.error}>{messageError}</h3>
                    </div>
                    <input
                        type="text"
                        id="message"
                        className={styles.input}
                        placeholder="Enter Inquiry"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                </div>
                <button className={styles.button} onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}
