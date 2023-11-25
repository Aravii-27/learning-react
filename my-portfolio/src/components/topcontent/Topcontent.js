import React, {useEffect, useRef} from 'react'
import Typed from 'typed.js'
import { Link } from 'react-scroll'
import './Topcontent.css'


const Topcontent = () => {
  const textElementRef = useRef();

  useEffect(() => {
    const options = {
      strings: ['Final Year Engineering Student'],
      typeSpeed: 50, // Adjust typing speed
      backSpeed: 25, // Adjust backspacing speed
      loop: true, // Set to false if you don't want it to loop
    };

    const typed = new Typed(textElementRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Mr.Aravindh Shanmugam</h1>
            <p><span ref={textElementRef}></span></p>
            <a href='www.google.com'>
                <button className='topcontent__downloadbutton'>Download CV</button>
            </a>
            <Link to='projects' smooth={true} duration={500}>
            <button className='topcontent__workbutton'>My Work</button>
            </Link>
        </div>
    </div>
  )
}

export default Topcontent