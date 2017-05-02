import Inferno from 'inferno';
import {IMG_PATH} from '../constants';

const ProjectPic = props => (
  <a className="project-pic" href={IMG_PATH + props.picLarge} target="_blank" >
    <img src={IMG_PATH + props.picSmall}/>
  </a>
)

module.exports = ProjectPic;
