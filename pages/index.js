import Head from "next/head";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";
import Hero from "../containers/Hero";

function Home() {
  return (
    <>
      <Hero>
        <Navbar />
        <h1>Hello</h1>
      </Hero>
    </>
  );
}

export default Home;
