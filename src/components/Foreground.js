import Inferno from 'inferno';
import Component from 'inferno-component';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

class Foreground extends Component {
  shouldComponentUpdate (nextProps) {
    if (parseInt(this.props.titleBling) !== parseInt(nextProps.titleBling)) return true;
    return false;
  }

  render () {
    return (
      <div id="foreground"  onMouseMove={this.props.moveHandler}
                            onTouchMove={this.props.moveHandler} 
                            onScroll={this.props.scrollHandler}>
        <div id="main-container">
          <Header titleBling={this.props.titleBling} />
          <Main />
          <Footer />
        </div>
      </div>
    )
  }
}

module.exports = Foreground;
