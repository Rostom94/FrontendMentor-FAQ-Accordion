function App() {
  return (
    <div class="wrapper">
      <div class="logo">
        <img src="./assets/icon-star.svg" alt="" />
        <h1>FAQs</h1>
      </div>
      <ul class="faq-container">
        <li class="faq-item">
          <div class="faq-question">
            <h2>
              What is Frontend Mentor, <br />
              and how will it help me
            </h2>
            <img id="detailBtn" src="./assets/icon-plus.svg" alt="" />
          </div>
          <p id="textToShow">
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </p>
        </li>
        <li class="faq-item">
          <div class="faq-question">
            <h2>Is Frontend Mentor free?</h2>
            <img id="detailBtn" src="./assets/icon-plus.svg" alt="" />
          </div>
          <p id="textToShow">
            Yes, Frontend Mentor offers both free and premium coding challenges,
            with the free option providing access to a range of projects
            suitable for all skill levels.
          </p>
        </li>

        <li class="faq-item">
          <div class="faq-question">
            <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <img id="detailBtn" src="./assets/icon-plus.svg" alt="" />
          </div>
          <p id="textToShow">
            Yes, you can use projects completed on Frontend Mentor in your
            portfolio. It's an excellent way to showcase your skills to
            potential employers!
          </p>
        </li>

        <li class="faq-item">
          <div class="faq-question">
            <h2>
              How can I get help if I'm stuck on a Frontend Mentor challenge?
            </h2>
            <img id="detailBtn" src="./assets/icon-plus.svg" alt="" />
          </div>
          <p id="textToShow">
            The best place to get help is inside Frontend Mentor's Discord
            community. There's a help channel where you can ask questions and
            seek support from other community members.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default App;