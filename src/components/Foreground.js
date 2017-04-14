import Inferno from 'inferno';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

const Foreground = props => (
  <div id="foreground" onMouseMove={props.moveHandler}>
    <div id="main-container">
      <Header/>
      <Main />
    </div>
    <Footer />
  </div>
)
module.exports = Foreground;
