import axios from "axios";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";
import conduit from "../assets/conduit.gif";

export default function ProjectCard({
  title,
  videoURL,
  description,
  techstack,
  github,
  demo,
}) {
  return (
    <>
      <p className="hero_intro text-tiny text-intro mt-10">{title}</p>
      <h1 className="text-white text-3xl mb-5">{title}</h1>
      <div className=" project__card ">
        {/* <video loop muted autoPlay src={videoURL} /> */}
        <video loop muted autoPlay>
          <source src={videoURL} type="video/webm" />
        </video>
        <p className="text-teaser text-muli text-base mt-4">{description}</p>
        <div className="project__card-btns flex flex-wrap sm:flex-nowrap justify-center mt-4">
          <Link href={github.link}>
            <a className=" project__card-btn w-full sm:w-1/2 text-center hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
          </Link>
          <Link href={demo.link}>
            <a className=" project__card-btn text-center ml-0 w-full mt-5 sm:mt-0 sm:w-1/2 sm:ml-4  hover:border-gray-700  text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <FontAwesomeIcon icon={faLink} /> Demo
            </a>
          </Link>
        </div>
      </div>
      <div className="mt-2 ml-5 mb-2">
        <ul className="flex">
          {techstack.map((language, index) => {
            return (
              <li key={index} className="techstack_shine mr-3 ">
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
