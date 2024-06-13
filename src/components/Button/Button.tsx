import { FC } from 'react';
import './Button.scss';

interface IButton {
    message: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button: FC<IButton> = ({ message, onClick, disabled }) => {
    return (
        <button className={disabled ? 'button button--disabled' : 'button'} onClick={onClick} disabled={disabled}>
            {message}
        </button>
    );
};

export default Button;
