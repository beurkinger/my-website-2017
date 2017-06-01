import Inferno from 'inferno';
import Component from 'inferno-component';

import About from './About';
import Contact from './Contact';
import Divider from './Divider';
import Projects from './Projects';

class Main extends Component {

  shouldComponentUpdate () { return false; }

  render () {
    return (
      <main id="main">
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
        <Divider />
      </main>
    )
  }
}

module.exports = Main;
