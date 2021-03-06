import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Route path="/about" render={()=> {
        return <Section name="About Me"
        content={`<div class="bodyt">
        <p>Hi, My name is Joseph Valancy, and this is why you should hire me.</p>
        <br>
        <p>My Master’s degree is in digital media and visual language, in which I specialized in techniques of visual and interactive media, as well as innovative ways to harness mobile technology in ways of reaching new audiences. In 2016 I completed a semester with Florida International University/Miami Ad Institute's digital marketing master's degree program. I then entered the master's degree program in digital media and visual language in the University of Central Florida because I believed it was a more intensive, comprehensive program.</p>
        <br>
        <p>While working on my masters degree, I created a digital asset management system that allows for companies to better capitalize on internet trends for their social media feeds. I also interned for an online learning platform in which I was responsible for overhauling the user interface to help encourage users to regularly return to the platform.</p>
        <br>
        <p>In 2019, I applied an augmented reality phone application in the Orlando Museum of Art to make exhibits more immersive for visitors.</p>
        <br>
        <p>I recently finished a contract with Colorado State University’s Cooperative Institute for Research into the Atmosphere, where I worked with NOAA at the National Hurricane Center in Miami to develop a program that renders hurricane data in a three dimensional space in a way that can be easily viewed and understood by meteorologists on a strict deadline, and deliver visual models that are fast, accurate and up to date. This involved me beta testing new open source software utilized for the creation of storm models.</p>
        <br>
        <p>I am now seeking to enter the private commercial market to expand my work experience and application of my technical skills.</p>
        <br>
        <p>I love receiving emails at</p><span style="color: darkcyan;">joevalancy@gmail.com</span>
        </div>`}
        />
      }}/>
    <Route path="/contact" render={()=> {
      return <Section name="Contact Me"
      content={`<section class="contactme">
            <div>
                <a href="assets/pdfs/ValancyResume2020_4.pdf" target="_blank">Download my resume Here!</a>
            </div>
        </section>`}
      />
    }}/>

    <Route path="/arttitle" render={()=> {
      return <Section name="My art"
      content={`<section class="art" id="art">
      <section class="artstuff">
          <header>Laugh Generator</header>
          <img src="assets/images/Laugh.png" alt="A joke and meme generator">
          <p>A collaborative Team Project where we created a site that grabs jokes and memes from external APIs, lets you filter them based on content, and lets you share them via social media.</p>
          <a href="https://nmr-code.github.io/Laugh-Generator/" target="_blank">Check it out live Here!</a>
          <a href="https://github.com/Jvala2/Laugh-Generator/" target="_blank">And on GitHub!</a>
      </section>
      <section class="artstuff">
          <header>Word Day Schedule Calendar App</header>
          <img src="assets/images/work.png" alt="A calendar app">
          <p>An html site/app that lets you store your daily tasks and keeps track of the current time.</p>
          <a href="https://jvala2.github.io/Daily-Calendar-App/" target="_blank">Check it out live Here!</a>
          <a href="https://github.com/Jvala2/Daily-Calendar-App/" target="_blank">And on GitHub!</a>
      </section>
      <section class="artstuff">
          <header>Filler Art</header>
          <img src="assets/images/3olantern.png" alt="Don't forget to write alt text">
          <p>Filler Pumpkins</p>
      </section>
      <section class="artstuff">
          <header>Filler Art</header>
          <img src="assets/images/3olantern.png" alt="Don't forget to write alt text">
          <p>Filler Pumpkins</p>
      </section>

  </section>`}
      />
    }}/>

    </Router>
  );
}

export default App;
