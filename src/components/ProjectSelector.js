import Inferno from 'inferno';
import {linkEvent} from 'inferno';

const ProjectSelector = props => {
  const getOption = (project, i) => {
    return <option value={i}>{project.title}</option>
  };

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
    <div class="selector">
      <button class="previous" onClick={ handlePrevious }>
        {"<<"}
      </button>
      <select value={props.selected} onChange={ e => props.changeHandler(e.target.value) }>
        {props.projects.map(getOption)}
      </select>
      <button class="next" onClick={ handleNext }>
        {">>"}
      </button>
    </div>
  )
}

module.exports = ProjectSelector;
