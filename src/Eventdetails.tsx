import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import './EventDetails.css';
import Typewriter from 'react-typewriter-effect';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation } from 'framer-motion';

const EventDetails: React.FC = () => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageUrls: string[] = [
        "winner.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "team.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    const typewriterRef = useRef<HTMLSpanElement | null>(null);
    const controls = useAnimation();

    useLayoutEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        if (entry.target.classList.contains("event-highlights")) {
                            controls.start("visible");
                        }
                        if (entry.target.classList.contains("event-description")) {
                            controls.start("visible");
                        }
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, [controls]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const updateWidth = () => {
            const typewriterWrapper = document.querySelector<HTMLDivElement>('.typewriter-wrapper');
            const typewriter = document.querySelector<HTMLDivElement>('.typewriter-wrapper .Typewriter');
            
            if (typewriter && typewriterWrapper) {
                typewriterWrapper.style.display = "flex";
                typewriterWrapper.style.justifyContent = "center";
                typewriterWrapper.style.alignItems = "center";
                typewriterWrapper.style.width = `${typewriter.offsetWidth}px`;
                typewriterWrapper.style.textAlign = "center";
                typewriter.style.textAlign = "center";
            }
        };
    
        requestAnimationFrame(updateWidth);
    }, []);

    const handleNext = () => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    };

    const handlePrev = () => {
        timeoutRef.current && clearTimeout(timeoutRef.current);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    };

    const underlineVariants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    };

    return (
        <div className="event-details">
           <section ref={(el) => { 
  if (el) sectionRefs.current[0] = el as HTMLDivElement; 
}} className="hero">
                <div className="event-title-container">
                    <h1 className="event-title">
                        <div className="title-animation">
                            <div className="background-animation">
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="cube"></div>
                                ))}
                            </div>
                            {!isMobile ? (
                                <span className="typewriter-wrapper" ref={typewriterRef}>
                                    <Typewriter
                                        textStyle={{
                                            fontFamily: "Courier New",
                                            fontWeight: "600",
                                            fontSize: "4rem",
                                            color: "#333",
                                            display: "inline-block",
                                        }}
                                        startDelay={100}
                                        cursorColor="orange"
                                        multiText={["SuperMove Tour dAppathon"]}
                                        typeSpeed={100}
                                        loop={true}
                                        multiTextLoop={true}
                                    />
                                </span>
                            ) : (
                                <span>SuperMove Tour dAppathon</span>
                            )}
                        </div>
                    </h1>
                </div>

                <p className="event-tagline">
                    <span className="word1">Innovate. </span>
                    <span className="word2">Connect. </span>
                    <span className="word3">Inspire. </span>
                </p>
            </section>

            <section ref={(el) => { 
  if (el) sectionRefs.current[1] = el as HTMLDivElement; 
}} className="event-description">
    <div className="event-description-heading">
                <h2>Embark on a Tech Odyssey</h2>
                </div>
                <p>
                    A 12-hours Hackathon to Learn, build, and Earn on Aptos.
                    <br />
                    Aptos x Spheron x IBW brings you day dappAthon, a series of 12-hour hackathons for students,
                    where you can learn, build, and ship a project on Aptos with a prize pool of $1000+.
                    <br />
                    At dAppathon MUJ, you will witness a 12-hour-long experience of coding, learning, networking, and having fun.
                    <br />
                    While you work towards building any project you want to, you will be complemented with informative workshops, enjoyable mini-games,
                    cool prizes, and pizzas to eat. 😎
                    <br />
                    <strong>Let's get you on board! 🚀</strong>
                </p>
                
            </section>
            <h2 className='highlight-heading'>Event Highlights</h2>
            <section ref={(el) => { 
  if (el) sectionRefs.current[0] = el as HTMLDivElement; 
}} className="event-highlights">
    
    <div className='event-highlights'>
    
                
                <motion.div className="underline" variants={underlineVariants} initial="hidden" animate={controls} />
                <div className="highlight-item">
                        <i className="fas fa-rocket"></i>
                        <h3>Visionary Keynotes</h3>
                        <p>Be inspired by tech luminaries and industry pioneers</p>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-code"></i>
                        <h3>Code Labs</h3>
                        <p>Hands-on sessions with cutting-edge technologies</p>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-network-wired"></i>
                        <h3>Tech Nexus</h3>
                        <p>Forge connections with peers and industry leaders</p>
                    </div>
                    <div className="highlight-item">
                        <i className="fas fa-lightbulb"></i>
                        <h3>Innovation Showcase</h3>
                        <p>Witness groundbreaking projects and ideas</p>
                    </div>
                    </div>
            </section>

            <h2 className="gallery-heading">Event Gallery</h2>
            <div className="container">
                <section className="image-gallery">
                    <div className="gallery-container">
                        <div className="gallery-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            {imageUrls.map((imageUrl, index) => (
                                <div className="gallery-item" key={index}>
                                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                            {imageUrls.map((imageUrl, index) => (
                                <div className="gallery-item" key={`duplicate-${index}`}>
                                    <img src={imageUrl} alt={`Image ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="gallery-controls">
                        <button onClick={handlePrev} aria-label="Previous Image">
                            <i className="fa-solid fa-arrow-left"></i>
                        </button>
                        <button onClick={handleNext} aria-label="Next Image">
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </section>
                <section ref={(el) => { 
  if (el) sectionRefs.current[3] = el as HTMLDivElement; 
}} className="cta-section">
                    <h2>Be Part of the Future</h2>
                    <p>Secure your spot at the most anticipated tech event of the year!</p>
                    <a href="https://lu.ma/hackmuj" className="register-button" target="_blank" rel="noopener noreferrer">
                        Register Now
                    </a>
                    <p>Event Date: 16th November 2024</p>
                    <p>Registration: Free</p>
                </section>
            </div>
        </div>
    );
};

export default EventDetails;
