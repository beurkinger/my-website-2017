import Inferno from 'inferno';
import Component from 'inferno-component';
import httpRequestHelper from '../helpers/httpRequestHelper';
import ProjectDetails from './ProjectDetails';
import ProjectPic from './ProjectPic';
import ProjectSelector from './ProjectSelector';
import {REST_PROJECTS_PATH} from '../constants';

class Projects extends Component {

  constructor(props) {
		super(props);
    this.state = {
      projects : [],
      selected : 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    httpRequestHelper(REST_PROJECTS_PATH,
    data => this.setState({ projects : data }),
    error => console.error(error))
  }

  handleChange (i) {
    this.setState({selected : parseInt(i)});
  }

  getProjectPic () {
    if (this.state.projects.length > 0 && this.state.projects[this.state.selected]) {
      let data = this.state.projects[this.state.selected];
      return <ProjectPic  picSmall={data.picSmall}
                          picLarge={data.picLarge} />
    }
  }

  getProjectDetails () {
    if (this.state.projects.length > 0 && this.state.projects[this.state.selected]) {
      let data = this.state.projects[this.state.selected];
      return <ProjectDetails title={data.title}
                      desc={data.desc}
                      techno={data.techno}
                      link={data.link}
                      github={data.github} />
    }
  }

  render () {
    return (
      <section id="projects">
        <h2>Projects</h2>
        <p>
          A selection of things I've worked on during the last
          years, professionnally or in my spare time. Select a
          project in the list to see it, or use the arrow flip through
          all the projects.
        </p>
        <div class="projects-browser">
          { this.getProjectPic() }
          <ProjectSelector  projects={this.state.projects}
                            selected={this.state.selected}
                            changeHandler={this.handleChange}
                             />
        </div>
        { this.getProjectDetails() }
      </section>
    )
  }

}

module.exports = Projects;