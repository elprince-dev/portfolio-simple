import Image from "next/image";
import styles from "./page.module.css";
import Header from "@@/components/header/Header";
import Intro from "@@/components/intro/Intro";
import About from "@@/components/about/About";

export default function Home() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <About />
    </div>
  );
}
