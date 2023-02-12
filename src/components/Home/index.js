
import index from './index.css'
/* import Image1 from '../../images/001.jpg'
import Image2 from '../../images/002.jpg'
import Image3 from '../../images/003.jpg'
import Image4 from '../../images/004.jpg'
import Image5 from '../../images/005.jpg'
import Image6 from '../../images/006.jpg'
import Image7 from '../../images/007.jpg'
import Image8 from '../../images/008.jpg'
import Image9 from '../../images/009.jpg' */
import { motion, AnimatePresence } from 'framer-motion'
import ImageSlider from '../ImageSlider'


const Home = () => {
    return (
    <>
    <div className="panel">
	    <div className="panel__content-col">
			<div className="panel__content">
				<div className="panel__text">
					<h1 className="panel__title">Art Adventurer</h1>
					<p className="panel__addr"><span></span>London Edition</p>
                    <div className='panel--container--link'>
                    <motion.a 
                        className='panel--link' 
                        href="/Quiz" whileHover={{scale:1.1}}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        >
                        START QUIZ</motion.a>
                    </div>
				</div>
				<div className="panel__line"></div>
                <br />
		    <div/>
		</div>
    </div>    
    <ImageSlider/>
	</div>
        </>
    );
}

export default Home;