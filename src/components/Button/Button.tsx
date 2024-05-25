import { FC } from 'react';
import './Button.scss';

interface IButton {
    message: string;
}

const Button: FC<IButton> = ({ message }) => {
    return (
        <button className='button' type='button'>
            {message}
        </button>
    );
};

export default Button;
