import Inferno from 'inferno';
import Component from 'inferno-component';

import Menu from './Menu';

class Header extends Component {

  shouldComponentUpdate (nextProps) {
    if (parseInt(this.props.titleBling) !== parseInt(nextProps.titleBling)) return true;
    return false;
  }

  render () {
    return (
      <header id="header" style={{perspective : "1000px"}}>
        <div class="titles" style={{ transform : 'rotateX(' + this.props.titleBling + 'deg)' }}>
          <h1>
            Hi, my name is<br/>
            Thibault Goehringer.
          </h1>
          <h2>
            I'm a web developper.
          </h2>
        </div>
        <Menu />
        <span class="clearfix"></span>
      </header>
    )
  }
}

module.exports = Header;
