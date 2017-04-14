import Inferno from 'inferno';

import About from './About';
import Contact from './Contact';
import Divider from './Divider';

const Main = props => (
  <main id="main">
    <About />
    <Divider />
    <Contact />
    <Divider />
  </main>
)
module.exports = Main;
