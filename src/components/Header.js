import Inferno from 'inferno';

import Menu from './Menu';

const Header = props => (
  <header id="header">
    <div class="titles">
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

module.exports = Header;
