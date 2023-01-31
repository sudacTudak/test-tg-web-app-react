import { HeaderProps } from "./Header.props";
import styles from './Header.module.scss';
import { Button } from "../../components/Button/Button";

export const Header: React.FC<HeaderProps> = () => {
    const tg = (window as any).Telegram?.WebApp;

    const onClose = () => {
        tg.close()
    }

    return (
        <header className={styles.header}>
            <Button text="Закрыть" onClick={onClose}/>
            <div className={styles.username}><span>{tg.initDataUnsafe?.user?.username}</span></div>
        </header>
    )
} 