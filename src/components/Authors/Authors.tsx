import './Authors.scss';

import author from '../../images/author.jpg';
import bg from '../../images/authors_bg.png';

const Authors = () => {
    return (
        <div className='authors'>
            <div className='_Container'>
                <div className='authors_body'>
                    <div className='authors_list'>
                        <div className='author_block'>
                            <img src={author} alt='Фотография создателя' className='author_avatar' />
                            <h4 className='author_name'>Данила Барашков</h4>
                            <p className='author_job'>Программист, веб-дизайнер</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src={bg} alt='Фоновое изображение' className='authors_background' />
        </div>
    );
};

export default Authors;
