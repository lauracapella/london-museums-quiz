
import index from './index.css'
import Image1 from '../../images/001.jpg'
import Image2 from '../../images/002.jpg'
import Image3 from '../../images/003.jpg'
import Image4 from '../../images/004.jpg'
import Image5 from '../../images/005.jpg'
import Image6 from '../../images/006.jpg'
import Image7 from '../../images/007.jpg'
import Image8 from '../../images/008.jpg'
import Image9 from '../../images/009.jpg'


const Home = () => {
    return (
        <>
        <div className="content">
            <p className='title--content'>Art Adventurer:</p>
            <p className='subtitle--conten'>London Edition</p>
            <a href="/Quiz">Empezar quiz</a>
            <div className='grid'>
                <img src={Image1} className='image-1' alt=''></img>
                <img src={Image2} className='image-2' alt=''></img>
                <img src={Image3} className='image-3' alt=''></img>
                <img src={Image4} className='image-4' alt=''></img>
                <img src={Image5} className='image-5' alt=''></img>
                <img src={Image6} className='image-6' alt=''></img>
                <img src={Image7} className='image-7' alt=''></img>
                <img src={Image8} className='image-8' alt=''></img>

            </div>
        </div>
        </>
    );
}

export default Home;