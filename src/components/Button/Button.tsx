import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button: React.FC<ButtonProps> = ({ text, className, ...props }) => {
    return <button className={cn(styles.button, className)} {...props}>
        {text}
    </button>
}