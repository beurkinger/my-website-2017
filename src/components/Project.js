import Inferno from 'inferno';

const Project = props => (
  <div class="project">
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
