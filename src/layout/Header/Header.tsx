import { HeaderProps } from "./Header.props";
import styles from './Header.module.scss';
import { Button } from "../../components/Button/Button";
import { useTelegram } from "../../hooks/use-telegram";

export const Header: React.FC<HeaderProps> = () => {
    const {onClose, onToggleButton, user} = useTelegram();

    return (
        <header className={styles.header}>
            <Button text="Закрыть" onClick={onClose}/>
            <div className={styles.username}><span>{user?.username}</span></div>
        </header>
    )
} 