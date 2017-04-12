import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

import Background from './Background';
import Foreground from './Foreground';

class App extends Component {

  constructor(props) {
		super(props);

    this.state.mouseX = -1;
    this.state.mouseY = -1;

    this.handleMove = this.handleMove.bind(this);
	}

  handleMove (e) {
    this.setState({mouseX : e.clientX, mouseY : e.clientY});
  }

	render () {
		return (
      <div id="app">
        <Background mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
        <Foreground moveHandler={this.handleMove} />
      </div>
    );
	}

}

module.exports = App;
