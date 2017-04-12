import Inferno from 'inferno';

import Header from './Header';
import Main from './Main';

const Foreground = props => (
  <div id="foreground" onMouseMove={props.moveHandler}>
    <div id="main-container">
      <Header/>
      <Main />
    </div>
  </div>
)
module.exports = Foreground;
