import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

class Main extends Component {

  constructor(props) {
		super(props);

    this.state = {
      text : "Hello, my name is Thibault'. I'm very happy to be with you today. I hope you are having a great time.",
			tones : []
		};
	}

	render () {
		return (
      <div>
        yolo
      </div>
    );
	}

}

module.exports = Main;
