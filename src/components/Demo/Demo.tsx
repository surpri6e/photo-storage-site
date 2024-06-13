import './Demo.scss';

import demo from '../../images/demo.jpg';
import double_bg from '../../images/double_bg.png';

const Demo = () => {
    return (
        <div className='demo'>
            <div className='_Container'>
                <div className='demo_body'>
                    <h2 className='demo_title title'>Демо</h2>
                    <p className='demo_text'>Вы можете увидеть и ознакомиться с базовым интерфейсом программы.</p>
                    <img src={demo} alt='Фотография интрефейса программы' className='demo_image' />
                </div>
            </div>

            <img src={double_bg} alt='123' className='demo_background' />
        </div>
    );
};

export default Demo;
