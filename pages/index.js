import Head from "next/head";
import { ReactElement } from "react";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";
import Hero from "../containers/Hero";
import Link from "next/link";
import profilePicture from "../assets/udit_dp_june_2021.png";
import conduitgif from "../assets/conduit.gif";
import { faLink } from "@fortawesome/free-solid-svg-icons";

// import GitHubButton from "react-github-btn";

function Home() {
  return (
    <>
      <Navbar />
      <Hero>
        <section>
          <p className="hero_intro text-xl text-intro">Hi, my name is</p>
          <h1>
            <strong className="hero_title text-title text-white font-bold">
              Udit Takkar
            </strong>
            <br />
          </h1>
          <p className="hero_teaser text-xl text-teaser text-muli">
            I am a Full Stack Developer, a hobbyist Reader and love building
            products.
            <br />
            <br />
            I create, design tools and Apps for companies and individuals.
            <br />
            <br />I write down my learnings in my blog sections so that people
            can learn from my mistakes.
            <br />
          </p>
          {/* <div className="github_btn mt-5">
          <GitHubButton
            href="https://github.com/Udit-takkar"
            data-color-scheme="no-preference: dark; light: light; dark: light;"
            data-size="large"
            data-show-count="true"
            aria-label="Follow @Udit-takkar on GitHub"
          >
            Follow @Udit-takkar
          </GitHubButton>
        </div> */}
        </section>
        {/* ------------------Projects --------------------------------------------------- */}
        <section className="projects mt-20">
          <h1 className="projects__section_title flex text-white text-4xl font-bold mb-5 items-center ">
            Projects
          </h1>
          <p className="projects__section_description text-xl text-muli text-teaser ">
            I have built plenty of projects and Web Apps like Bots, Blogging
            Application etc. maninly with JavaScript Here are some of them.
          </p>
          <div className="projects__container flex flex-col	">
            <div className="projects__container_1 project__card mt-5">
              <h1 className="text-white text-4xl">
                Coduit a social blogging site
              </h1>
              <p className="text-teaser text-muli text-xl">
                "Conduit" is a social blogging site (i.e. a Medium.com clone).
                It uses a custom API for all requests, including authentication.
              </p>
              <div>
                <ul>
                  <li className="techstack_shine ">
                    React Redux Styled-components
                  </li>
                </ul>
              </div>
              <div className="project__card-btns mt-4">
                <Link href="https://github.com/Udit-takkar/Blogging-App">
                  <a className=" project__card-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    <FontAwesomeIcon icon={faGithub} /> Github
                  </a>
                </Link>
                <Link href="https://conduit-l2jvca9fh-udit-takkar.vercel.app/">
                  <a className=" project__card-btn ml-4 hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    <FontAwesomeIcon icon={faLink} /> Demo
                  </a>
                </Link>
              </div>
            </div>
            <div className="projects__container_2 project__card"></div>
            <div className="projects__container_3 project__card"></div>
            <div className="projects__container_4 project__card"></div>
          </div>
        </section>
        {/* --------------------------ABout Me ------------------------------------------- */}
        <section className="About_Me mt-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-20 items-center ">
            About Me
          </h1>
          <div className="About_Me__content flex justify-center items-center		">
            <img
              src={profilePicture}
              inline-block
              className="picture inline-block"
              alt="profile-pic"
            />
            <div className="About_Me__content-text ml-8 text-teaser text-muli text-xl text-base">
              Hello! I'm Udit Takkar, a Self-taught Web Developer based in New
              delhi, India with a love and passion for building products using
              the latest web technologies.
              <br />
              <br />I am currently pursuing B.Tech in CSE from Maharaja Agrasen
              institute of Technology(MAIT) '23.
              <br />
              <br />
              Here are a few technologies I work with
              <ul className="grid grid-cols-2">
                <li>HTML & CSS</li>
                <li>JavaScript</li>
                <li>React.js & Redux</li>
                <li>MongoDB & Mongoose</li>
                <li>Node.js</li>
                <li>Express</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --------------------------Contact Section ------------------------------------------- */}
        <section className="Contact mt-20 mb-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-5 items-center ">
            Get in Touch
          </h1>
          <div className="contact__content flex w-full justify-center	text-teaser text-xl text-muli">
            My inbox is always open whether it's for a potential client,
            <br />
            a recruiter or to simply drop for a chat <br />
            Want me to work on your project or your team ? <br />
          </div>

          <div className="contact__social-btns mt-8 flex justify-center w-full">
            <Link href="https://www.linkedin.com/in/udit-takkar-5457a1187/">
              <a className=" social-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FontAwesomeIcon icon={faLinkedin} /> LinkdeIn
              </a>
            </Link>
            <Link href="https://github.com/Udit-takkar">
              <a className=" social-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </Link>
            <Link href="https://twitter.com/UditCodes">
              <a className=" social-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </Link>
          </div>
        </section>
      </Hero>
    </>
  );
}

export default Home;
