import Inferno from 'inferno';
import Component from 'inferno-component';
import {IMG_PATH} from '../constants';

class ProjectPic extends Component {

  constructor (props) {
    super(props);
    this.state = { display : false };
  }

  getLargePic () {
    if (this.state.display) return (
      <div className="large-container" >
        <img  src={IMG_PATH + this.props.picLarge}
              className="pic-large" />
        <button className="large-exit" onClick={ e => this.setState({'display' : false})}>
          X
        </button>
      </div>
    )
  }

  render () {
    return (
      <div className="project-pic">
        <img  src={IMG_PATH + this.props.picSmall}
              alt={this.props.alt}
              onClick={ e => this.setState({'display' : true})}
              className="pic-small" />
        {this.getLargePic()}
      </div>
    )
  }
}

module.exports = ProjectPic;
