import styles from './Form.module.scss';
import cn from 'classnames';
import { FormProps } from './Form.props';
import { ChangeEvent, useEffect, useState } from 'react';
import { useTelegram } from './../../hooks/use-telegram';

export const Form: React.FC<FormProps> = ({ className, ...props }) => {
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [subject, setSubject] = useState<string>('physical');
    const { tg } = useTelegram();

    const onChangeCountry = (e: ChangeEvent<HTMLInputElement>) => {
        const country = e.target.value;
        setCountry(country);
    }

    const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
        const city = e.target.value;
        setCity(city);
    }

    const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
        const street = e.target.value;
        setStreet(street);
    }

    const onChangeSubject = (e: ChangeEvent<HTMLSelectElement>) => {
        const subject = e.target.value;
        setSubject(subject);
    }

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        })
    }, [])

    useEffect(() => {
        if (!country || !city || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city, street]);

    return (
        <form className={cn(styles.form, className)}>
            <div className={styles['block-title']}>
                <h3 className={styles['title']}>
                    Введите Ваши данные
                </h3>
            </div>
            <label className={styles['field']}>
                <span>Введите Вашу страну</span>
                <input 
                    className={styles['input']}
                    type='text'
                    placeholder='Страна'
                    value={country}
                    onChange={onChangeCountry}
                />
            </label>
            <label className={styles['field']}>
                <span>Введите Ваш город</span>
                <input 
                    className={styles['input']}
                    type='text'
                    placeholder='Город'
                    value={city}
                    onChange={onChangeCity}
                />
            </label>
            <label className={styles['field']}>
                <span>Введите Вашу улицу</span>
                <input 
                    className={styles['input']}
                    type='text'
                    placeholder='Улица'
                    value={street}
                    onChange={onChangeStreet}
                />
            </label>
            <label className={styles['field']}>
                <select 
                    className={styles['select']}
                    value={subject}
                    onChange={onChangeSubject}
                >
                    <option value={'physical'}>Физ. лицо</option>
                    <option value={'legal'}>Юр. лицо</option>
                </select>
            </label>
        </form>
    )
} 