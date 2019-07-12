import React, { Component } from 'react';
import Row from './components/Row';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import TextField from './components/TextField';
import Card from './components/Card';

import SmartCards1 from './images/SmartCards1.png';
import SFU1 from './images/SFU1.png';
import MemoryGame1 from './images/MemoryGame1.png';

import './App.scss';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Header />
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <TextField>
          <h5>About Me</h5>
          <p>
            I’m a Full Stack Web Developer with previous work experience as an
            audio-visual systems programmer.
          </p>
          <p>
            Currently, I'm tutoring students, building applications and
            continuing to learn new technologies.
          </p>
          <p>
            When I'm not programming, I'm probably writing songs, debating who's
            the best coffee roaster in town or lost somewhere in the Rockies.
          </p>
        </TextField>
        <TextField>
          <h5>Technical Skills</h5>
          <p>
            React, Angular, MongoDB, MySQL, PostgreSQL, Express, Node,
            JavaScript, jQuery, Handlebars, HTML, CSS, GitHub, Heroku, Amazon S3
          </p>
        </TextField>
        <TextField>
          <h5>Projects</h5>
        </TextField>
        <TextField>
          <hr />
        </TextField>

        <Row>
          <Card
            number='1'
            title='SmartCards'
            alt='SmartCards'
            image={SmartCards1}
            li1='SmartCards is a full stack application built with React,
          MongoDB, Express and Node'
            li2='These flash cards make it easy to study and learn'
            li3='Users can add new cards, new libraries and keep track of
          guess results'
            AppLink='https://smartcards-wagnerdev.herokuapp.com/'
            GitLink='https://github.com/WagnerAndrew/SmartCards'
          />
          <Card
            number='2'
            title='Simple File Upload'
            alt='Simple File Upload'
            image={SFU1}
            li1="This application utilizes Amazon's S3 to store uploaded
          files"
            li2='The file is referenced as a link in a SQL database and
          ready to view in a new browser'
            li3='Express, Node, Handlebars, jQuery and Sequelize are all
          working behind the scenes'
            AppLink='https://sfu-wagnerdev.herokuapp.com/'
            GitLink='https://github.com/WagnerAndrew/SFU'
          />
          <Card
            number='3'
            title='Rock & Roll Memory Game'
            alt='Rock & Roll Memory Game'
            image={MemoryGame1}
            li1='This is a memory game built with React'
            li2='Test your memory by avoiding a double click on a Rock &
          Roll Hall Of Famer'
            li3='Current scores change during game play and the high
          score is held until you surpass it'
            AppLink='https://rockandrollmemorygame.netlify.com/'
            GitLink='https://github.com/WagnerAndrew/Rock-and-Roll-Memory-Game'
          />
        </Row>
      </div>
    );
  }
}
export default App;
