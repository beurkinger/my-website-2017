import Inferno from 'inferno';
import Component from 'inferno-component';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class Foreground extends Component {
  shouldComponentUpdate () { return false; }

  render () {
    return (
      <div id="foreground" onMouseMove={this.props.moveHandler}>
        <div id="main-container">
          <Header/>
          <Main />
          <Footer />
        </div>
      </div>
    )
  }
}

module.exports = Foreground;
