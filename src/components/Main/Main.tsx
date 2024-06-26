import Button from '../Button/Button';
import './Main.scss';

import bg from '../../images/bg.gif';
import { downloadFile } from '../../utils/downloadFile';

const Main = () => {
    return (
        <div className='main'>
            <div className='main_body _Ibg'>
                <img src={bg} alt='Фоновое изображение' className='main_background' />
                <div className='main_info'>
                    <h1 className='main_title title'>Бесплатное файловое хранилище</h1>
                    <p className='main_text'>
                        Файловое хранилище предназначеное для сохранности ценных фотографий, воспоминаний и теплых чувств. Работает абсолютно быстро и
                        безопасно!
                    </p>
                    <Button message='Скачать под Windows' onClick={() => downloadFile('Surphoto1.0.0.exe')} />
                </div>
            </div>
        </div>
    );
};

export default Main;
