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
          <h1 className="projects__section_title flex text-white text-4xl font-bold mb-20 items-center ">
            Projects
          </h1>
        </section>
        <section className="About Me mt-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-20 items-center ">
            About Me
          </h1>
        </section>
        <section className="Contact mt-20">
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
