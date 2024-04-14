import { useState } from "react";

import plus from "./assets/icon-plus.svg";
import minus from "./assets/icon-minus.svg";
import star from "./assets/icon-star.svg";

function App() {
  const [icon, setIcon] = useState(plus);

  const [FAQ_OBJ, setFAQ] = useState([
    {
      q: "What is Frontend Mentor and how will it help me",
      r: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
      icon: plus,
      isOpen: false,
    },
    {
      q: "Is Frontend Mentor free?",
      r: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      icon: plus,
      isOpen: false,
    },
    {
      q: "Can I use Frontend Mentor projects in my portfolio?",
      r: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      icon: plus,
      isOpen: false,
    },
    {
      q: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
      r: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      icon: plus,
      isOpen: false,
    },
  ]);

  function clickHandler(index) {
    const updatedFAQ = [...FAQ_OBJ];
    updatedFAQ[index].isOpen = !updatedFAQ[index].isOpen;
    updatedFAQ[index].icon = updatedFAQ[index].isOpen ? minus : plus;
    setFAQ(updatedFAQ);
  }

  function FaqHandler() {
    return FAQ_OBJ.map((obj, index) => {
      return (
        <li key={index} className="faq-item">
          <div className="faq-question">
            <h2>{obj.q}</h2>
            <img onClick={() => clickHandler(index)} src={obj.icon} alt="" />
          </div>
          {obj.isOpen && <p>{obj.r}</p>}
        </li>
      );
    });
  }

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={star} alt="" />
        <h1>FAQs</h1>
      </div>
      <ul className="faq-container">
        <FaqHandler />
      </ul>
    </div>
  );
}

export default App;
