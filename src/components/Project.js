import Inferno from 'inferno';
import {IMG_PATH} from '../constants';

const Project = props => (
  <div class="project">
    <img src={IMG_PATH + props.picSmall}/>
    <h3>
      {props.title}
    </h3>
    <p class="desc">
      {props.desc}
    </p>
    <ul>
      <li>
        <strong>Techno used : </strong>
        {props.techno}
      </li>
      <li>
        <strong>See : </strong>
        <a href={props.link}>
          {props.link}
        </a>
      </li>
      <li>
        <strong>Github : </strong>
        <a href={props.github}>
          {props.github}
        </a>
      </li>
    </ul>
  </div>
)

module.exports = Project;
