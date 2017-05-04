import Inferno from 'inferno';

const getGithub = (github) => {
  if (github && github.trim() !== '') {
    return (
      <li>
        <strong>Github : </strong>
        <a href={github} target="_blank">{github}</a>
      </li>
    )
  }
}

const getLink = (link) => {
  if (link && link.trim() !== '') {
    return (
      <li>
        <strong>See : </strong>
        <a href={link} target="_blank">{link}</a>
      </li>
    )
  }
}

const ProjectDetails = props => (
  <div class="project">
    <p class="desc">
      {props.desc}
    </p>
    <ul>
      <li>
        <strong>Techno used : </strong>
        {props.techno}
      </li>
      {getLink(props.link)}
      {getGithub(props.github)}
    </ul>
  </div>
)

module.exports = ProjectDetails;
