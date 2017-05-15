import Inferno from 'inferno';
import {linkEvent} from 'inferno';
import ProjectSelect from './ProjectSelect';

const ProjectBrowser = props => {
  // const getOption = (project, i) => {
  //   return <option value={i}>{project.title}</option>
  // };

  const handlePrevious = (e) => {
    e.preventDefault();
    let i = props.selected - 1;
    if ( i >= 0) props.changeHandler(i);
  };

  const handleNext = (e) => {
    e.preventDefault();
    let i = props.selected + 1;
    if ( i <= props.projects.length - 1) props.changeHandler(i);
  };
  return (
    <div class="browser">
      <ProjectSelect  options={props.projects}
                      value={props.selected}
                      changeHandler={props.changeHandler}/>
      <div class="arrows">
        <button class="previous" onClick={ handlePrevious }>
          {"<<"}
        </button>
        <span>{props.selected + 1} / {props.projects.length}</span>
        <button class="next" onClick={ handleNext }>
          {">>"}
        </button>
      </div>
    </div>
  )
}

// <select value={props.selected} onChange={ e => props.changeHandler(e.target.value) }>
//   {props.projects.map(getOption)}
// </select>

module.exports = ProjectBrowser;
