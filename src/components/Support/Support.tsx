import Button from '../Button/Button';
import './Support.scss';

import double_bg from '../../images/double_bg.png';

const Support = () => {
    return (
        <div className='support _Ibg'>
            <div className='_Container'>
                <div className='support_body'>
                    <div className='support_left'>
                        <h2 className='title support_title'>
                            Наша кругло
                            <wbr />
                            суточная поддержка
                        </h2>
                        <p className='support_text'>При возникновении вопроса вы можете задать его нам и получить быстрый и четкий ответ!</p>
                    </div>
                    <div className='support_right'>
                        <input type='text' className='support_input' placeholder='Имя' />
                        <input type='text' className='support_input' placeholder='Почта' />
                        <textarea className='support_textarea' placeholder='Вопрос' />
                        <div>
                            <Button message='Отправить' onClick={() => alert()} />
                        </div>
                    </div>
                </div>
            </div>

            <img src={double_bg} alt='Задний фон' className='support_background' />
        </div>
    );
};

export default Support;
