import React from 'react'
import Bg from '../assets/a.png'
import resume from "../assets/resume.pdf";
import { FaFacebook } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SiCredly } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";


const index = () => {
    return (
        <div style={{ width: "100%", minHeight: "100vh" }}>
            <div className='top'>
                <div style={{ minWidth: "400px", maxWidth: "800px", display: 'flex', justifyContent: 'start', alignItems: 'start', gap: '16px', flexDirection: 'column' }}>
                    <div className='name'>Reign Gameng</div>
                    <div className='job'>Junior Full-Stack Developer</div>
                    <div className='skills'>
                        {/* <div className='skill-option'> Bootstrap </div> */}
                        <div className='skill-option'> MERN Stack</div>
                        {/* <div className='skill-option'> Modular CSS </div>
                        <div className='skill-option'> Custom CSS </div> */}
                    </div>
                    <div className='about'>
                        Enthusiastic Bachelor of Science in Information Technology graduate with experience developing websites and mobile application. Skilled in JavaScript, React.js, Node.js, PHP, and MongoDB, with a strong foundation in HTML, CSS, and REST APIs. Detail-oriented, cooperative, and eager to deliver scalable, user-focused solutions.
                    </div>
                </div>
                <div className='bgimg'></div>
            </div>
            <div className='middle'>
                <div className='middle-yes'>

                    {/* <div className='header'>
                        <div>skills</div>
                        <div>projects</div>
                        <div>capstone</div>
                        <div>education</div>
                        <div>certificate</div>
                        <div>achivement</div>
                        <div>contact</div>
                    </div> */}

                    <div className='parts'>
                        <div className='cat-name'>Technical Skill</div>
                        <div className='column-5'>
                            <div className='acard'>
                                <div className='acard-title'>Programming Languages</div>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>PHP</li>
                                    <li>C#</li>
                                </ul>
                            </div>
                            <div className='acard'>
                                <div className='acard-title'>Frontend</div>
                                <ul>
                                    <li>React.js</li>
                                    <li>Vite</li>
                                    <li>Tailwind CSS</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                            <div className='acard'>
                                <div className='acard-title'>Backend</div>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>REST APIs</li>
                                </ul>
                            </div>
                            <div className='acard'>
                                <div className='acard-title'>Database</div>
                                <ul>
                                    <li>MongoDB</li>
                                    <li>Firebase</li>
                                    <li>MSSQL</li>
                                </ul>
                            </div>
                            <div className='acard'>
                                <div className='acard-title'>Tools & Platforms</div>
                                <ul>
                                    <li>GitHub</li>
                                    <li>VS Code</li>
                                    <li>Android Studio</li>
                                    <li>Canva</li>
                                    <li>Figma</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Projects</div>
                        <div className='column-3'>
                            <div className='bcard'>
                                <div className='bcard-title'>BusCat</div>
                                <div className='bcard-desc'>mobile and web Bus Booking App</div>
                                <div className='bcard-code'>
                                    <div>Java</div>
                                    <div>Android Studio</div>
                                    <div>Firebase</div>
                                </div>
                                <div className='bcard-img aimg'></div>
                            </div>
                            <div className='bcard'>
                                <div className='bcard-title'>Bus Booking System</div>
                                <div className='bcard-desc'>Web Bus Booking Application</div>
                                <div className='bcard-code'>
                                    <div>PHP</div>
                                    <div>JavaScript</div>
                                    <div>MSSQL</div>
                                </div>
                                <div className='bcard-img bimg'></div>
                            </div>
                            <div className='bcard'>
                                <div className='bcard-title'>Hangman</div>
                                <div className='bcard-desc'>Mobile Game Application</div>
                                <div className='bcard-code'>
                                    <div>Java</div>
                                    <div>Android Studio</div>
                                </div>
                                <div className='bcard-img cimg'></div>
                            </div>

                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Capstone</div>
                        <div className='column-1'>
                            <div>
                                <div className='ccard'>
                                    <div className='ccard-title'>BarangEYE</div>
                                    <div className='ccard-desc'>A Smart Barangay Incident Reporting and Monitoring System</div>
                                    <div className='ccard-code'>
                                        <div>MongoDB</div>
                                        <div>Express.js</div>
                                        <div>React js</div>
                                        <div>Node.js</div>
                                        <div>React Native</div>
                                        <div>JavaScript</div>
                                    </div>
                                    <div className='ccard-img-con'>
                                        <div className='ccard-img caimg'></div>
                                        <div className='ccard-img cbimg'></div>
                                        <div className='ccard-img ccimg'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Education</div>
                        <div className='column-1'>
                            <div className='dcard'>
                                <div className='dcard-title'>Bachelor of Science and Information Technology </div>
                                <div className='dcard-desc'>Innovative College of Science and Technology (2023-2027) </div>
                            </div>
                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Certificate and Seminars</div>
                        <div className='column-3'>
                            <div className='ecard'>
                                <div>
                                    <div className='ecard-title'>Data Analytics Essentials <a href='https://www.credly.com/badges/9c1aeead-8a36-4053-9b8e-f7d9ef4c081c/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 5/29/2026</div>
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>

                                    <div className='ecard-title'>JavaScript Essentials 1 <a href='https://www.credly.com/badges/4a98480f-bcb7-44c7-9227-8b1ec4ac6cce/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 6/25/2026</div>

                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>

                                    <div className='ecard-title'>CSS Essentials <a href='https://www.credly.com/badges/7e550c68-add6-481b-810c-a4c76bb1a531/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 6/28/2026</div>
                                  
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>
                                    <div className='ecard-title'>JavaScript Essentials 2 <a href='https://www.credly.com/badges/e7b909b3-5b20-4fb4-867a-eda5f80546b7/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 6/29/2026</div>
                                    
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>
                                    <div className='ecard-title'>HTML Essentials <a href='https://www.credly.com/badges/3e89de98-65b1-4a6f-a17f-f3f937d6d53a/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 7/30/2026</div>
                                    
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>
                                    <div className='ecard-title'>IT Customer Support Basics <a href='https://www.credly.com/badges/d21a8550-111f-4ee3-aa9a-02fcf5d374f5/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 8/31/2026</div>
                                    
                                </div>
                                <div>

                                </div>
                            </div>
                            <div className='ecard'>
                                <div>
                                    <div className='ecard-title'>Introduction to Modern AI <a href='https://www.credly.com/badges/7c5fde70-cc43-4d72-a7e8-ccaf73963ac5/public_url'><FaExternalLinkAlt/></a></div>
                                    <div className='ecard-date'>Cisco | 8/31/2026</div>
                                    
                                </div>

                            </div>

                            {/* <div>
                            <div>Seminars</div>
                            <ul>
                            <li>React.js</li>
                            <li>Vite</li>
                            <li>Tailwind CSS</li>
                            <li>CSS</li>
                            </ul>
                            </div> */}
                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Achievements</div>
                        <div className='column-1'>
                            <div>
                                <div className='fcard'>
                                    <div className='fcard-title'>Code Commanders Champion</div>
                                    <div className='fcard-desc'>Battle of Engineering and Information Technology Students (BEITS) (2026) </div>
                                </div>
                                <div className='fcard'>
                                    <div className='fcard-title'>Code Commanders Champion</div>
                                    <div className='fcard-desc'>Battle of Engineering and Information Technology Students (BEITS) (2026) </div>
                                </div>
                                <div className='fcard'>
                                    <div className='fcard-title'>Computer Programing Contest 3rd place</div>
                                    <div className='fcard-desc'>IT Fest (2023) </div>
                                </div>
                            </div>
                            {/* <div>
                            <div>Highest Scores</div>
                            <ul>
                            <li>React.js</li>
                            <li>Vite</li>
                            <li>Tailwind CSS</li>
                            <li>CSS</li>
                            </ul>
                            </div> */}
                        </div>
                    </div>



                    <div className='parts'>
                        <div className='cat-name'>Resume and Contacts</div>
                        <div className='column-1'>
                            <div>
                                <div className='gcard'>
                                    <div className='gcard-title'>Resume</div>
                                    <a
        href={resume}
        download="Reign-Gameng-Resume.pdf"
        className='button'

    >
        Download
    </a>
                                </div>

                            </div>
                            <div>
                                <div className='gcard'>
                                    <div className='gcard-title'>Contact me at</div>
                                    <div className='gcard-aaa'>
                                        
                                        <div>
                                            <div className='gcard-link'><FaFacebook className='gcard-b'/><a href='https://www.facebook.com/reign.gameng.2025'>Reign Gameng</a></div>
                                            <div className='gcard-link'><FaLinkedin className='gcard-b'/><a href='www.linkedin.com/in/reign-gameng-04a7b7433'>Reign Gameng</a></div>
                                            <div className='gcard-link'><SiGmail className='gcard-b'/>gamengreign2005@gmail.com</div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div>
                                <div className='gcard'>

                                    <div className='gcard-title'>Others</div>
                                    <div className='gcard-aaa'>
                            
                                        <div>
                                            <div className='gcard-link'><SiCredly className='gcard-b' /><a href='https://www.credly.com/users/reign-gameng'>Reign Gameng</a></div>
                                            <div className='gcard-link'><IoLogoGithub className='gcard-b' /><a href='https://github.com/ReignGameng'>Reign Gameng</a></div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index