import React, { useEffect, useState } from "react"
import AnimateLetter from "../AnimateLittter"
import "./index.scss"
import {
  faPython,
  faCss3,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  })
  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimateLetter
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
            letterClass={letterClass}
          />
        </h1>
        <p>
          I'm a very ambitious front-end developer looking for a role in an
          established IT company with the opportunity to work with the latest
          technologies on challenging and diverse projects.
        </p>
        <p align='LEFT'>
          I'm quiet confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a family
          person, father of a beautiful daughter, a sports fanatic, photography
          enthusiast, and tech-obsessed!!!
        </p>
      </div>
      <div className='skill'>
        <div className='image_1'>
          <FontAwesomeIcon icon={faPython} color='#02639b' className='icon' />
        </div>
        <div className='image_2'>
          <FontAwesomeIcon icon={faReact} color='#039bf3' className='icon' />
        </div>
        <div className='image_3'>
          <FontAwesomeIcon icon={faJsSquare} color='#f6ff00' className='icon' />
        </div>
        <div className='image_4'>
          <FontAwesomeIcon icon={faHtml5} color='#cd1414' className='icon' />
        </div>
        <div className='image_5'>
          <FontAwesomeIcon icon={faCss3} color='#0051ff' className='icon' />
        </div>
        <div className='image_6'>
          <FontAwesomeIcon icon={faGithub} color='#000103' className='icon' />
        </div>
        <div className='image_7'>
          <FontAwesomeIcon icon={faNodeJs} color='#05ff01' className='icon' />
        </div>
      </div>
    </div>
  )
}

export default About
