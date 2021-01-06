import React, { Component } from 'react';
import axios from 'axios';
// const path = require('path'); 
// app.use(express.static(path.join(__dirname, 'client/build')));

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import './App.css';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 18,
      tasks: [],
      isLoggedIn: false,
      userInfo: {
        name: 'Mohammad Jouza', // name={'Mohammad Jouza'}
        age: 26, // age={26}
        favFood: 'Fried Chicken', // favFood={ 'Fried Chicken',}
      },
    };
  }
  componentDidMount() {
    console.log('componentDidMount', 3);
  }



  render() {
    console.log('render', 2);
    const { changeAge, editFirstTask, deleteFirstTask } = this;
    const { tasks, age } = this.state;
    return (
      <Router>
        <div >
          <div id="ABOUT" className=" navbar navbar-dark ">
            <ul className="main-nav " data-toggle="buttons" >
              <li>
                <a className="active" type="radio" name="options" href="#ABOUT" autocomplete="off" checked>ABOUT </a>
              </li>
              <li>
                <a href="#SKILLS">SKILLS</a>
              </li>
              <li>
                <a href="#PROJECTS">PROJECTS</a>
              </li>
              <li>
                <a href="#EDUCATION">EDUCATION </a>
              </li>
              <li >
                <a href="#INTERESTS">INTERESTS & REFERENCES</a>
              </li>
            </ul>
          </div>
          <Route exact path="/SKILLS">
          </Route>

          <Route path="/EDUCATION">
          </Route>
          <div className="head about" >
            <h1>MALIK MUSLEH</h1>  
            <h2>SOFTWARE ENGINEER</h2>
            <a href="mailto:jmzomalek@gmail.com"> &#9993; Jmzomalek@gmail.com</a>
            <a href="tel:962780950198"> &#9990; +96278950198</a>
            <h4>LIFE STYLE</h4>
            <p>If ican't do great things, I can do small things in great way !</p>
            <ul className="main-nav1">
              <li><a href="mailto:jmzomalek@gmail.com"> <img src="https://www.pinclipart.com/picdir/middle/213-2133056_icon-mail-png-round-mail-icon-png-clipart.png" ></img></a> </li>
              <li><a href="https://www.linkedin.com/in/malikdarmusleh/" > <img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-2662666-2213265.png" ></img></a></li>
              <li><a href="tel:962780950198"><img src="https://i.pinimg.com/originals/b5/d7/19/b5d7198734ee5174b581630628ecfdd6.png" ></img></a></li>
              <li> <a href="https://github.com/Malek-AL-jmzawy/"><img src="https://icons-for-free.com/iconfiles/png/512/part+1+github-1320568339880199515.png" ></img></a></li>
              <li id="SKILLS"> <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=ed6de6839a&attid=0.1&permmsgid=msg-a:r2171258112158663993&th=176c870eb0b34f09&view=att&disp=inline&realattid=176c8704d25c0f7b60e1&saddbat=ANGjdJ9iVbEuPvntspUL4fxnXUINjSUMY4SEspD9TSUxAf4S-y_-Rij7EcKmZFB3UvWhOvIy830gvNHmIRni-SuamYHim5CkhcfO7NPl0K0Ikm9qxXUrHU9v_cl6uqSnQSjL655Taqi_oBR3RaN7jXOw_Amz1aWyMQcP5GCycec9KW6S8FeoynBB3qQaqTplv3xphekEUjYBsOQrw_4h2iHj8_mQXmVZlBai_Q4w92kVyP_tEl4AUcBtshT6Nuuv2oKcqsiGcZLI-9rmc_HAS0BN9uTOQQeYNIh-jkAQSqe0sTaDtZsSeFy4ZJ51kRLLOkzyRhwzqYZxIoVqNKiYR0BTEAMmhB7CjT4tHyJqIT6VLN0lu_K16vJ0g1-76OSaov17xsvmswLdYJovWtAj4ubgENbNMdC7xD2JNRJEgGQxpb1m7AkrKyrqtlYxCSSBQ2RXv4rbo4RISVSKVITPPLhYQcAe-fwa-kX540GLU89kzNi2C6ED4A5xwVrvzO4xyqz73ooEQ3hBQjAp9q8PJDce8Hh59gPktbLyJJLpo1CjMOjFbpcn61_gGZ8EBA-cZUvDO3IlrUx1sg9G6eHnG0aGCZTolEstyBVsgpFCcFQ23COWkI-WxawJMhWHpo9YRp89u0U7jT_4EmmVoqj1wkjtqcQSUPFNVafrY_veIatlx3Dkz3N2OOMFKVrnFnc">
                CV </a></li> </ul>
          </div> 
          <div className="head">
            <h2  >SKILLS</h2>  
            <h4>Programming Languages & Tools:</h4>
            <ul class="list-inline list-icons">
              <li class="list-inline-item">
                <i class="devicon-javascript-plain colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-github-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-react-original-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-mongodb-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-mysql-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-html5-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-css3-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-jquery-plain-wordmark colored"></i>
              </li>
              {/* <br> */}
              <li class="list-inline-item" style={{ color: "#ce0000" }}>
                <i class="devicon-express-original-wordmark"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-nodejs-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-trello-plain-wordmark colored"></i>
              </li>
              <li class="list-inline-item">
                <i class="devicon-bootstrap-plain-wordmark colored"></i>
              </li>
            </ul>
            <h2>Personal Skills:</h2>
            <ul className="skills">
              <li>&#10147;Agile / Scrum</li>
              <li>&#10147;Work under high pressure</li>
              <li>&#10147;Creative Strategy</li>
              <li>&#10147;Team Work</li>
              <li>&#10147;Time Managment</li>
              <li>&#10147;Negotiation</li>
              <li>&#10147;Problem Solving</li>
              <li id="PROJECTS">&#10147;Flexible, Adaptive & Open to Constructive Criticism</li>
            </ul>
          </div>
          <div  className="head">
            <h2>PROJECTS</h2>
            <h4>Online.com</h4>
            <p>An e-commerce delivery site that is designed to let the user place an order as a
            customer or deliver the order as a delivery man and create his own store, this
                 will provide unlimited jobs without any requirement</p>
            <div>
              <h5>Technology Used</h5>
              <h5 className="tech" >Technology Used</h5 >
              <p>&#10147; Node js &nbsp;
                <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-javascript-plain colored"></i>&nbsp;
              Express js  <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-express-original-wordmark"></i>&nbsp;
              My SQL DB <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-mysql-plain-wordmark colored"></i></p>
              <p>&#10147; React js 
                <i  style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-react-original-wordmark colored"></i>&nbsp;
              CSS 3 <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-css3-plain-wordmark colored"></i>&nbsp;
              Bootstrap <i  style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}}class="devicon-bootstrap-plain-wordmark colored"></i></p>
              <a href="https://github.com/profissional-coder/Rentello-website"><button class="btn btn-secondary"  >
                <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} className="	far fa-file-code"></i>  Project Code  click me !</button></a>


            </div >
            <h4>Rentello</h4>
            <p>E-Commerce application help people the need money by offer their owned
                equipment for rent.</p>
            <div>
              <h5 className="tech" >Technology Used</h5 >
              <p>&#10147; Node js &nbsp;
                <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-javascript-plain colored"></i>&nbsp;
              Express js  <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-express-original-wordmark"></i>&nbsp;
              My SQL DB <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-mysql-plain-wordmark colored"></i></p>
              <p>&#10147; React js 
                <i  style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-react-original-wordmark colored"></i>&nbsp;
              CSS 3 <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} class="devicon-css3-plain-wordmark colored"></i>&nbsp;
              Bootstrap <i  style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}}class="devicon-bootstrap-plain-wordmark colored"></i></p>
              <a id="EDUCATION" href="https://github.com/profissional-coder/Rentello-website"><button class="btn btn-secondary"  >
                <i style={{  border: "solid  rgba(3, 18, 233, 0.301) 4px"}} className="	far fa-file-code"></i>  Project Code  click me !</button></a>
            </div>
          </div>
          <div  className="head">
            <h2> EDUCATION </h2>
            <h4>Meraki Academy</h4>
            <p>We learned how to become a
            full stack developer using technology as:
            react js, CSS3 and bootstrap as front end;
                node js, express js as as back end</p>
            <h4>Al- Balqa' Applied University</h4>
            <p>Bachelor of Science in Mechanical Engineering</p>
            <p id="INTERESTS">Graduated at 2018</p>
          </div >
          <div  className="head" >
            <h2>INTERESTS & REFERENCES</h2>
            <h4>INTERESTS</h4>
            <p>&#10147; Reading <i class="fas fa-book" style={{ color: "black" }}></i></p>
            <p>&#10147; Music &#9833; &#9738;</p>
            <p>&#10147; Gaming  <i class="fas fa-gamepad" style={{ color: "black" }}></i></p>

            <h4>LANGUAGES</h4>
            <p>Arabic  &nbsp;<img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1355749-200.png" style={{ width: "20px", height: "20px", color: "#329932" }}></img>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;English  &nbsp; <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/1355802-200.png" style={{ width: "20px", height: "20px", color: "#329932" }}></img></p>
            <h4>REFERENCES</h4>
            <p >  <span className=" bg-dark text-primary ">MOHAMMAD JOZAA :</span>
              <span className="text-secondary" >(+962) 780 291 130   m.jozaa@yahoo.com </span>
              <span className="text-secondary"> /Insructor in Meraki Academy</span> </p>

            <p> <span className=" bg-dark text-primary"> BESSLAN BZADOUGH  :</span>
              <span className="text-secondary">(+962)  775 693 705  besslan.bazadough@gmail.com </span>
              <span className="text-secondary">/Insructor in Meraki Academy </span> </p>
            <p> <span className=" bg-dark text-primary"> Bader Sabbagh :</span><span className="text-secondary"> (+962)  782 659 211  </span>
            <span className="text-secondary">/Manager in modanisa </span></p>
            <p><span className=" bg-dark text-primary">Mohammed Qassas :</span>
              <span className="text-secondary"> (+962)  798 541 685 </span> <span className="text-secondary">/Account-manager in modanisa </span></p>


          </div>

          <Route path="/INTERESTS">
          </Route>
          <Route path="/test">
            <h1>Programming Languages & Tools:</h1>
          </Route>
        </div>
      </Router>
    );
  }
}

/*
 const age = 18;
    const name = 'hadeel';
    console.log('A: ', age);
    // JSX => HTML   {} => JS logic   ` ` => ${}
    console.log('THIS 1: ',this)
        <TodoList myName='hadeel' myAge={age}/>


           <p>hello world</p>
        <p>My Age is: age </p>
        <p>My Age is: {age} </p>




  you need to use state in your component copy this code
  constructor(props){
    super(props)
    this.state={

    }
  }



  axios
axios
      .get('http://localhost:5000/tasks')
   .then((response) => {
        console.log('RESPONSE: ', response);
        console.log('DATA: ', response.data);
      })
      .catch((err) => {
        console.log('RESULT: ', err);
      });
*/
