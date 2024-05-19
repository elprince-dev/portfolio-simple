import Image from "next/image";
import  "./page.scss";
import Header from "@@/components/header/Header";
import Intro from "@@/components/intro/Intro";
import About from "@@/components/about/About";
import Projects from "@@/components/projects/Projects";
import Contact from "@@/components/contact/Contact";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
