import Inferno from 'inferno';
import Component from 'inferno-component';
import httpRequestHelper from '../helpers/httpRequestHelper';
import Project from './Project';
import ProjectSelector from './ProjectSelector';

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
    httpRequestHelper('build/data/projects.json',
    data => this.setState({ projects : data }),
    error => console.log(error))
  }

  handleChange (i) {
    this.setState({selected : i});
  }

  getProject () {
    if (this.state.projects.length > 0 && this.state.projects[this.state.selected]) {
      let data = this.state.projects[this.state.selected];
      return <Project title={data.title}
                      picSmall={data.picSmall}
                      picLarge={data.picLarge}
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
          years, professionnally or in my spare time. <br/>
        Select a project in the list to see it, or use the arrow flip through
        all the projects.
        </p>
        <ProjectSelector  projects={this.state.projects}
                          selected={this.state.selected}
                          changeHandler={this.handleChange}
                           />
        { this.getProject() }
      </section>
    )
  }

}

module.exports = Projects;
