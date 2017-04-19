import Inferno from 'inferno';

import About from './About';
import Contact from './Contact';
import Divider from './Divider';
import Projects from './Projects';

const Main = props => (
  <main id="main">
    <About />
    <Divider />
    <Projects />
    <Divider />
    <Contact />
    <Divider />
  </main>
)
module.exports = Main;
