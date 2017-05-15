import Inferno from 'inferno';
import Component from 'inferno-component';

class ProjectSelect extends Component {

  constructor(props) {
		super(props);
    this.state = { open : false };

    this.props = {
      options : [],
      value : -1,
      changeHandler : null
    }

    this.getLi = this.getLi.bind(this);
    this.select = this.select.bind(this);
    this.switchUl = this.switchUl.bind(this);
  }

  getCurrent () {
    if (typeof this.props.options[this.props.value] !== 'undefined') {
      return this.props.options[this.props.value].title;
    }
  }

  getLi (item, i) {
    if (i !== this.props.value) return (
      <li onClick={e => this.select(i, e)} >
        {item.title}
      </li>
    )
  }

  switchUl (e) {
    e.preventDefault();
    this.setState({ open : !this.state.open });
  }

  select (itemId, e) {
    this.switchUl(e);
    this.props.changeHandler(itemId, e);
  }

  render() {
    return (
      <div className={ "project-select " + (this.state.open ? 'open' : '') }>
        <span onClick={this.switchUl}>
          {this.getCurrent()}
          <i></i>
        </span>
        <div onClick={this.switchUl}></div>
        <ul>
          {this.props.options.map(this.getLi)}
        </ul>
      </div>
    )
  }

}

module.exports = ProjectSelect;
