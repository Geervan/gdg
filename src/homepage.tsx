import React, { useState } from "react";
import "./homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

interface FAQ {
  question: string;
  answer: string;
}

const Homepage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "What is GDG on Campus?",
      answer:
        "GDG on Campus is a community-driven program by Google Developer Groups (GDG), designed for students and developers on university campuses to connect, learn, and grow together. It aims to promote the Google developer ecosystem, technologies, and best practices while building a supportive network of peers.",
    },
    {
      question: "Is there any membership fee?",
      answer:
        "No, GDG on Campus is completely free to join. All events, workshops, and activities are usually free as well. The goal is to make developer resources and networking opportunities accessible to all students.",
    },
    {
        question: "Who can join GDG on Campus?",
        answer:
          "GDG on Campus is open to all students, developers, and tech enthusiasts interested in learning more about Google technologies and other programming-related topics. You don't need to be a computer science major to participate—everyone is welcome!",
      },

      {
        question: "Do I need prior experience to participate in GDG events",
        answer:
          "No, prior experience is not required. GDG on Campus welcomes people at all levels—from beginners to experienced developers. Events are designed to be inclusive, with sessions tailored to various skill levels. Whether you're just getting started or looking to deepen your expertise, there’s something for you!",
      },

      {
        question: "Do I need to know Google technologies to participate in GDG on Campus events?",
        answer:
          "While it helps to have some familiarity with Google technologies like Android, Google Cloud, and Firebase, it's not a requirement. GDG on Campus is open to everyone, and the events are designed to be educational, regardless of your prior knowledge. Many sessions are beginner-friendly and meant to help you get started.",
      },

      {
        question: "What kind of events does GDG on Campus organize?",
        answer:
          "GDG on Campus organizes a variety of events, including:\n Workshops and Bootcamps on Google technologies like Android, Firebase, Google Cloud, and more.\n Hackathons for hands-on coding and problem-solving experiences. Tech Talks where industry experts and experienced developers share their knowledge. Networking events for students to connect with peers, mentors, and potential employers. Developer challenges to help you build and showcase your skills.",
      },

      {
        question: "Is there any membership fee?",
        answer:
          "No, GDG on Campus is completely free to join. All events, workshops, and activities are usually free as well. The goal is to make developer resources and networking opportunities accessible to all students.",
      },

      {
        question: "Can I become a leader of a GDG on Campus chapter?",
        answer:
          "Yes! If you're passionate about technology and community building, you can become a chapter lead. GDG on Campus chapters are student-led, and there are many opportunities to take on leadership roles, whether you're organizing events or managing community outreach.",
      },
    
  ];

  const toggleFAQ = (index:number) => {
    setActiveIndex(index === activeIndex? null: index);
  };

  return (
    <div className="app-container">
      <section className="hero">
        <div className="hero-content">
          <img src="src\assets\dsc_logo.png" alt="GDG Logo Large" className="hero-logo" />
          <h1>
            <span style={{ color: "#ea4335" }}>Google</span>{" "}
            <span style={{ color: "#ea8600" }}>Developer</span>{" "}
            <span style={{ color: "#34a853" }}>Group</span>{" "}
            <span style={{ color: "#4285f4" }}>on Campus</span>{" "}
          </h1>
          <p>Manipal University Jaipur</p>
          <button>Join Our Community</button>
        </div>
      </section>

      <section className="events">
        <div className="section-content">
          <div className="section-header">
            <img src="src\assets\calender.png" alt="Calendar Icon" />
            <div>
              <h2>Events</h2>
              <p>
                Join us for exciting events,
                <br />
                workshops, and tech talks at GDG
                <br />
                on Campus - where innovation meets community!
              </p>
            </div>
          </div>
          <button>Events</button>
        </div>
      </section>

      <section className="team">
        <div className="section-content">
          <div className="section-header">
            <img src="https://dsckiit.in/landing.svg" alt="Team Icon" />
            <h2>Our Team</h2>
          </div>
          <p>
            Meet the passionate and diverse team driving innovation and
            collaboration at GDG on Campus - together, we're building the
            future of tech!
          </p>
          <button>Team</button>
        </div>
      </section>

      <section className="about">
        <div className="section-content">
          <div className="section-header">
            <img src="src/assets/us.png" alt="About Icon" />
            <h2>About Us</h2>
          </div>
          <p>
            GDG on Campus is a vibrant community of tech enthusiasts dedicated
            to learning, collaboration, and innovation through events and
            workshops.
          </p>
          <button>About</button>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item faq-item-${index + 1}`}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  {activeIndex === index ? (
                    <FontAwesomeIcon icon={faChevronDown} />
                  ) : (
                    <FontAwesomeIcon icon={faChevronLeft} />
                  )}
                </div>
                {activeIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <button className="ask-button">Ask Us Your Doubts</button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
