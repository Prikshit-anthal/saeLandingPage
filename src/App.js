import React from 'react';
import './App.css';
import road from "./img/road.jpg"
import f2 from "./img/f2.jpg"
import atv from "./img/atv.jpg"
import Card from './img/card/Card'
import nit from "./img/nit.jpg"
import acc from "./img/acc.jpg"

// function color()
// {
//   document.getElementsByClassName("dots_p").style.color="green";

// }
function App() {
  return (

    <div>
      <div
        style={{
          backgroundImage: `url(${road})`, backgroundRepeat: 'no-repeat', color: 'white'
        }}
        className="Back"
      >
        <div className="Navbar">
          <a href="$" className="nav_tem" >Home</a>
          <a href="$" className="nav_tem">Teams</a>
          <a href="$" className="nav_tem">Autokriti</a>
          <a href="$" className="nav_tem">Orientation</a>
        </div>
        <section id="slider">
          <div>
            <b>SAE</b><br />
            <b>NIT </b> <br /><b>KURUKSHETRA</b>
          </div>
          <div id="moto">
            <p>Design.Build.Race.</p>
          </div>
        </section>

        <br />

        <img src={f2} alt="unavail" className="png" id="f1" />
        <img src={atv} alt="unavail" className="png" id="atv" />





      </div>

      <div style={{
        backgroundImage: `url(${road})`, backgroundRepeat: 'no-repeat', color: 'white'
      }}
         className="new">
        <h2 className="Teams">Our Teams</h2>
        <div className="card_take">
          <Card head="Team Accelerons"
            src={acc}
            body="SUPRA" />
          <Card
            head="Team Nitrox"
            src={nit}
            body="NITROX's offroade"
          />
        </div>
        <section id="po">
          <div id="about">About SAE</div>
          <hr />
          <p>  SAE NIT Kurukshetra is a collegiate club affiliated under SAE India, which is a wing of SAE International   on a national scale. The club is a platform for budding engineers to work together and arrive at solutions to the problems in the mobility field. It forms a link between naive talents and pioneers of the industry.
            Valuing the interdisciplinary nature of the automobile sector, UG students from various branches strive to innovate better under the guidance of our professors here at NIT Kurukshetra.
            It is the inexorable spirit of the members that has been propelling the club despite various challenges in its path. Since its inception in the year 2009, the club's endeavorment has hardened in the anvil of time.
            We bring our skills in competition in various events like BAJA SAE, ATVC, SUPRA and Formula Bharat. We share the acquired knowledge with other minds in the North India's biggest Automotive Workshop, Autokriti. More than 800 participants from different colleges all over North India were keen on learning in Autokriti 11.0 previous year. "Ignite to achieve" is not only our club motto, but the way of life for us.</p>
        </section>
        <article className="Navbar" id="final">
          <section className="ghj">
            <h2>The Trinity</h2>
            <h2>Explore</h2>
            <h2>Our Leaders</h2>
            <h2>Contact us</h2>
             </section>
             <section className="ghj">
             <div className="k">
              
            <a href="$"><p>Autokriti</p></a>
            <a href="$"><p>Team Accelerons</p></a>
            <a href="$"><p>Team Nitrox</p></a>
             </div>
          <div className="k">
               
            <a href="$"><p>Gallery</p></a>
            <a href="$"><p>Sponsors</p></a>
            <a href="$"><p>Discuss</p></a>
            <a href="$"><p>Support us</p></a>
             </div>
          <div className="k">
              <h3>President</h3>
              <a href="$"> Keshav Vats </a>
              <h3>Vice President</h3>
              <a href="$">   Ritik Goyal </a>
              <h3>Marketing Chairperson</h3>
              <a href="$">  Pavitra Jain </a>
             </div>
          <div className="k" id="q">
              <p> +91 7999991375</p>
              <a href="$"><address>nitroxkkr@gmail.com</address></a>
             </div>
          </section>
        </article>
      </div>
      
    </div>



  );
}

export default App;