import Inferno from 'inferno';

const removeHttp = string => {
  return string.replace(/http\:\/\/|https\:\/\//gi, "");
}

const getAElt = (path, i, elts) => {
  if (path && path.trim() !== '') {
    return (
      <span>
        <a href={path} target="_blank">{removeHttp(path)}</a>
        { i + 1 < elts.length ? ', ' : ''}
      </span>)
  }
}

const getGithubs = githubs => {
  if (githubs && githubs.length > 0) {
    return (
      <li>
        <strong>Github : </strong>
        {githubs.map(getAElt)}
      </li>
    )
  }
}

const getLinks = links => {
  if (links && links.length > 0) {
    return (
      <li>
        <strong>See : </strong>
        {links.map(getAElt)}
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
      {getLinks(props.links)}
      {getGithubs(props.githubs)}
    </ul>
  </div>
)

module.exports = ProjectDetails;
