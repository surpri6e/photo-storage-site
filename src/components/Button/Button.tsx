import { FC } from 'react';
import './Button.scss';

interface IButton {
    message: string;
    href: string;
}

const Button: FC<IButton> = ({ message, href }) => {
    return (
        <a href={href} className='button'>
            {message}
        </a>
    );
};

export default Button;
