import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";
import Hero from "../containers/Hero";
import GitHubButton from "react-github-btn";

function Home() {
  return (
    <>
      <Navbar />
      <Hero>
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
          <br />I write down my learnings in my blog sections so that people can
          learn from my mistakes.
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
      </Hero>
    </>
  );
}

export default Home;
