import Button from '../Button/Button';
import './Support.scss';

import double_bg from '../../images/double_bg.png';
import { useEffect, useState } from 'react';
import { validateEmail } from '../../utils/validateEmail';
import { createQuestionInDatabase } from '../../utils/createQuestionInDatabase';

const Support = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const [isEnabled, setIsEnabled] = useState(true);

    useEffect(() => {
        if (name.length > 3 && question.length > 10 && validateEmail(email)) {
            setIsEnabled(false);
        }
        if (!(name.length > 3 && question.length > 10 && validateEmail(email))) {
            setIsEnabled(true);
        }
    }, [name, email, question]);

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
                        <input
                            type='text'
                            className='support_input'
                            placeholder='Имя (больше 3 символов)'
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type='text'
                            className='support_input'
                            placeholder='Почта (только yandex и gmail)'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <textarea
                            className='support_textarea'
                            placeholder='Вопрос (больше 10 символов)'
                            onChange={(e) => setQuestion(e.target.value)}
                            value={question}
                        />
                        <div>
                            <Button
                                message='Отправить'
                                onClick={async () => {
                                    await createQuestionInDatabase({ name, email, text: question });
                                    setName('');
                                    setEmail('');
                                    setQuestion('');
                                }}
                                disabled={isEnabled}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <img src={double_bg} alt='Задний фон' className='support_background' />
        </div>
    );
};

export default Support;
