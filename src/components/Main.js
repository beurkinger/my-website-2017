import Inferno from 'inferno';

import About from './About';
import Contact from './Contact';
import Copyrights from './Copyrights';
import Divider from './Divider';


const Main = props => (
  <main>
    <About />
    <Divider />
    <Contact />
    <Divider />
    <Copyrights />
  </main>
)
module.exports = Main;
