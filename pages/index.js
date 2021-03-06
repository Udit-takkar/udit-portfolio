import Head from "next/head";
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
import ProjectCard from "../components/ProjectCard";
import dynamic from "next/dynamic";
const GitHubButton = dynamic(() => import("react-github-btn"), { ssr: false });
import React, { useEffect } from "react";

function Home(props) {
  const { data } = props;

  useEffect(() => {
    if (document) {
      console.log("Hi");

      (function (d, t) {
        var pp = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        pp.src =
          "https://app.pageproofer.com/embed/0640a432-18c3-50bc-9a2e-c213cd7586cd";
        pp.type = "text/javascript";
        pp.async = true;
        s.parentNode.insertBefore(pp, s);
      })(document, "script");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Udit Takkar</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
            I am a Full Stack Developer, a hobbyist Reader and I love building
            products.
            <br />
            <br />
            I create, design tools and Apps for companies and individuals.
            <br />
            <br />I try to bring ideas to Life with code.
            <br />
          </p>
          <div className="github_btn mt-5">
            <GitHubButton
              href="https://github.com/Udit-takkar"
              data-color-scheme="no-preference: dark; light: light; dark: light;"
              data-size="large"
              data-show-count="true"
              aria-label="Follow @Udit-takkar on GitHub"
            >
              Follow @Udit-takkar
            </GitHubButton>
          </div>
        </section>
        {/* ------------------Projects --------------------------------------------------- */}
        <section id="projects" className="projects mt-20">
          <h1 className="projects__section_title flex text-white text-4xl font-bold mb-5 items-center ">
            Projects
          </h1>
          <p className="projects__section_description text-xl text-muli text-teaser ">
            I have built plenty of projects and Web Apps including Bots,
            Dashboards etc. mainly with JavaScript.
            <br />
            <br /> Here are some of them.
          </p>
          <div className="projects__container flex flex-col	">
            {data &&
              data.map(
                ({ title, video, description, techstack, github, demo }) => {
                  return (
                    <ProjectCard
                      key={title}
                      title={title}
                      videoURL={video}
                      description={description}
                      techstack={techstack}
                      github={github}
                      demo={demo}
                    />
                  );
                }
              )}
          </div>
        </section>
        {/* --------------------------Hackathon  ------------------------------------------- */}
        <section id="hackathons" className="Hackathons mt-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-5 items-center ">
            Hackathons
          </h1>
          <ul className="list-outside list-disc ml-6">
            <li className="text-red-500 mb-5">
              <span className="text-black text-teaser text-muli  text-xl">
                Won prize in two tracks
                <span> </span>
                <span className="text-bold">Moralis and Filecoin</span>
                <span> </span>
                at India's biggest Web3 Hackathon BUIDL IT Hackathon 2021 by
                Polygon among
                <span className="text-bold"> 5000+</span> registered
                participants.
              </span>
            </li>
            <li className="text-red-500 mb-5">
              <span className="text-black text-teaser text-muli  text-xl">
                Won <span className="text-bold">First Position</span> at CIS
                Hackathon organised by incubateIND and Github 2021 from total of{" "}
                <span className="text-bold"> 75+</span> registered teams.
              </span>
            </li>
            <li className="text-red-500 mb-5">
              <span className="text-black text-teaser text-muli  text-xl">
                My team was amongst <span className="text-bold">Top 6</span>{" "}
                teams from the total of
                <span className="text-bold"> 1878 registered teams</span> in
                e-Yantra Fighting COVID-19 Hackathon orgainsed by IIT-Bombay
                2021.
              </span>
            </li>
            <li className="text-red-500">
              <span className="text-black text-teaser text-muli  text-xl">
                Awarded <span className="text-bold">Special Mention</span> in
                IGDTUW Hackathon 2020
              </span>
            </li>
          </ul>
        </section>

        {/* --------------------------About Me ------------------------------------------- */}
        <section id="about" className="About_Me mt-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold sm:mb-20 mb-5 items-center ">
            About Me
          </h1>
          <div className="About_Me__content flex justify-center items-center flex-col md:flex-row		">
            <img
              src={profilePicture}
              className="picture inline-block sm:mb-0 mb-10"
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
                <li>React & Redux</li>
                <li>MongoDB & Mongoose</li>
                <li>Node</li>
                <li>Express</li>
                <li>GraphQL</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>
        {/* --------------------------Contact Section ------------------------------------------- */}
        <section id="contact" className="Contact mt-20 mb-20">
          <h1 className="projects__section_title whitespace-nowrap flex text-white text-4xl font-bold mb-5 items-center ">
            Get in Touch
          </h1>
          <div className="contact__content flex w-full sm:ml-10 ml-0	text-teaser text-xl text-muli">
            My inbox is always open whether it's for a potential client,
            <br />
            a recruiter or to simply drop for a chat <br />
            Want me to work on your project or your team ? <br />
          </div>

          <div className="contact__social-btns mt-8 flex sm:ml-10 justify-center  flex-wrap  sm:flex-nowrap sm:flex-row content-center sm:content-start	 flex-col  w-full sm:max-w-xl	 ">
            <Link href="https://www.linkedin.com/in/udit-takkar-5457a1187/">
              <a className="sm:w-1/3 w-full sm:mt-0 inline-block  text-center social-btn hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                <FontAwesomeIcon icon={faLinkedin} /> LinkdeIn
              </a>
            </Link>
            <Link href="https://github.com/Udit-takkar">
              <a className="sm:w-1/3 w-full mt-2 sm:mt-0 social-btn  text-center hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow sm:ml-2">
                <FontAwesomeIcon icon={faGithub} /> Github
              </a>
            </Link>
            <Link href="https://twitter.com/UditCodes">
              <a className="sm:w-1/3 w-full mt-2 sm:mt-0 social-btn  text-center hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow sm:ml-2">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </Link>
          </div>
        </section>
        {/* -------------------------Footer-------------------------------------- */}
        <footer>
          <p className="text-white text-tiny text-center mb-10 hero_intro text-intro">
            Made with Nextjs & Tailwindcss By Udit
          </p>
        </footer>
      </Hero>
    </>
  );
}
export async function getStaticProps() {
  const res = await fetch("https://udit-takkar.vercel.app/api/projects");
  // const res = await fetch("http://localhost:3000/api/projects");

  const data = await res.json();

  return {
    props: {
      data,
      revalidate: 60,
    },
  };
}

export default Home;
