import "../App.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="lg:pl-[25%]    w-screen back text-white  ">
      <Home />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
