import './Cards.scss';

const Cards = () => {
    return (
        <div className='cards'>
            <div className='_Container'>
                <div className='cards_body'>
                    <div className='cards_list'>
                        <div className='card'>
                            <h2 className='card_title'>Быстро</h2>
                            <p className='card_text'>Сервис работает невероятно быстро. Вам не придется ждать часы, пока загрузятся ваши любимые фотографии.</p>
                        </div>
                        <div className='card'>
                            <h2 className='card_title'>100% безопасность</h2>
                            <p className='card_text'>Не нужно сомневаться, что ваши данные будут переданы 3 лицам. Мы гарантируем безопасность!</p>
                        </div>
                        <div className='card'>
                            <h2 className='card_title'>Круглостучная поддержка</h2>
                            <p className='card_text'>У нас присутствует круглосуточная поддержка, которая ответит на любые ваши вопросы.</p>
                        </div>
                        <div className='card'>
                            <h2 className='card_title'>Бесплатно</h2>
                            <p className='card_text'>Мы дарим вам 100МБ свободного места на облачном диске!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;
