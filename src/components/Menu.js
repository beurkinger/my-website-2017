import Inferno from 'inferno';

const Menu = props => (
  <nav id ="menu">
    <ul>
      <li>
        <a href="#about">
          About
        </a>
      </li>
      <li>
        <a href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact">
          Contact
        </a>
      </li>
    </ul>
  </nav>
)

module.exports = Menu;
