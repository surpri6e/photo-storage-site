import { FC } from 'react';
import './Button.scss';

interface IButton {
    message: string;
    onClick: () => void;
}

const Button: FC<IButton> = ({ message, onClick }) => {
    return (
        <button className='button' onClick={onClick}>
            {message}
        </button>
    );
};

export default Button;
