"use client"
import { useEffect, useState } from 'react';
import styles from './contact.module.css'
import Link from 'next/link';
import { useLanguage } from '@/app/languageContextProvider';

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });
    const { language } = useLanguage();

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [sendingError, setSendingError] = useState(false);
    const [prevLanguage, setPrevLanguage] = useState(language);
    useEffect(() => {
           if(nameError !== '') setNameError(language === 'en' ? 'Name is required' : 'İsim gerekli');
              if(emailError !== '') setEmailError(language === 'en' ? 'Email is required' : 'Email gerekli');
                if(messageError !== '') setMessageError(language === 'en' ? 'Message is required' : 'Mesaj gerekli');
    }, [language]);
    const handleSubmit = async () => {
        setNameError('');
        setEmailError('');
        setMessageError('');
        let hasError = false;

        if (form.name === '') {
            setNameError(
                language === 'en' ? 'Name is required' : 'İsim gerekli'
            );
            hasError = true;
        }
        if (form.email === '') {
            setEmailError(
                language === 'en' ? 'Email is required' : 'Email gerekli'
            );
            hasError = true;
        }
        if (form.message === '') {
            setMessageError(
                language === 'en' ? 'Message is required' : 'Mesaj gerekli'
            );
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
            <h1>
                {language === 'en' ? 'Sending Email' : 'Email Gönderiliyor'}
            </h1>
        </div>
    );

    if(sent) return (
        <div className={styles.loadingContainer}>
            <h1>
                {language === 'en' ? 'Email Sent' : 'Email Gönderildi'}
            </h1>
            <Link href="/products">
                <h3>
                    {language === 'en' ? 'Back to Products' : 'Ürünlere Geri Dön'}
                </h3>
            </Link>
        </div>
    );

    if(sendingError) return (
        <div className={styles.loadingContainer}>
            <h1>
                {language === 'en' ? 'Error Sending Email' : 'Email Gönderilirken Hata Oluştu'}
            </h1>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <h1>
                    {language === 'en' ? 'Contact Us' : 'Bize Ulaşın'}
                </h1>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>
                            {language === 'en' ? 'Name' : 'İsim'}
                        </h3>
                        <h3 className={styles.error}>{nameError}</h3>
                    </div>
                    <input
                        type="text"
                        id="name"
                        className={styles.input}
                        placeholder={language === 'en' ? 'Enter Name' : 'İsim Girin'}
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>
                            {language === 'en' ? 'Email' : 'Email'}
                        </h3>
                        <h3 className={styles.error}>{emailError}</h3>
                    </div>
                    <input
                        type="text"
                        id="email"
                        className={styles.input}
                        placeholder={language === 'en' ? 'Enter Email' : 'Email Girin'}
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                </div>
                <div className={styles.formGroup}>
                    <div>
                        <h3 className={styles.h3}>
                            {language === 'en' ? 'Inquiry' : 'Mesaj'}
                        </h3>
                        <h3 className={styles.error}>{messageError}</h3>
                    </div>
                    <input
                        type="text"
                        id="message"
                        className={styles.input}
                        placeholder={language === 'en' ? 'Enter Inquiry' : 'Mesaj Girin'}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                </div>
                <button className={styles.button} onClick={handleSubmit}>
                    {language === 'en' ? 'Send' : 'Gönder'}
                </button>
            </div>
        </div>
    );
}
