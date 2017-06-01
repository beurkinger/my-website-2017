import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

import Background from './Background';
import Foreground from './Foreground';

class App extends Component {

  constructor(props) {
		super(props);


    this.state = {
      mouseX : -1,
      mouseY : -1,
      titleBling : 0
    }


    this.handleMove = this.handleMove.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
	}

  handleMove (e) {
    this.setState({mouseX : e.clientX, mouseY : e.clientY});
  }

  handleScroll (e) {
    if (e.target.scrollTop > 200) return false;
    let special = e.target.scrollTop / 2 ;
    special = special > 90 ? 90 : special;
    this.setState({titleBling : special });
  }

	render () {
		return (
      <div id="app">
        <Background mouseX={this.state.mouseX} mouseY={this.state.mouseY} />
        <Foreground titleBling={this.state.titleBling}
                    moveHandler={this.handleMove}
                    scrollHandler={this.handleScroll} />
      </div>
    );
	}

}

module.exports = App;
