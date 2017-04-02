import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

const GRID_SIZE = 33;
const MAX_DROP_SIZE = 30;
const MAX_DEVIATION = 8;

class Background extends Component {

  constructor(props) {
		super(props);

    this.canvas = null;
    this.ctx = null;
    this.buffers = {back : null, front : null}

    this.props = { mouseX : -1, mouseY : -1 };

    this.paint = this.paint.bind(this);
    this.handleResize = this.handleResize.bind(this);
	}


  componentDidMount () {
    // this.canvas.style.background = 'black';
    this.setCanvasDimensions();
    this.createBuffers();
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.clear();

    window.onresize = this.handleResize;
  }

  shouldComponentUpdate () {
    this.paint();
    return false;
  }


  setCanvasDimensions () {
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
  }

  createBuffers () {
    // this.buffers.back = new Buffer(this.canvas.width, this.canvas.height);
    this.buffers.front = new Buffer(this.canvas.width, this.canvas.height);
    this.drawGrid(this.buffers.front);
  }

  drawGrid (buffer) {
    let nbSquaresX = Math.ceil(buffer.canvas.width / GRID_SIZE);
    let nbSquaresY = Math.ceil(buffer.canvas.height / GRID_SIZE);
    buffer.ctx.beginPath();
    buffer.ctx.rect(0, 0, buffer.canvas.width, buffer.canvas.height);
    buffer.ctx.fillStyle = '#FFF';
    buffer.ctx.fill();
    buffer.ctx.closePath();
    buffer.ctx.lineWidth = 1;
    buffer.ctx.strokeStyle = '#000';
    buffer.ctx.beginPath();

    for (let i = 0; i < nbSquaresX; i++) {
      buffer.ctx.moveTo(i * GRID_SIZE, 0);
      buffer.ctx.lineTo(i * GRID_SIZE, buffer.canvas.height);
      buffer.ctx.stroke();
    }
    for (let i = 0; i < nbSquaresY; i++) {
      buffer.ctx.moveTo(0, i * GRID_SIZE);
      buffer.ctx.lineTo(buffer.canvas.width, i * GRID_SIZE);
      buffer.ctx.stroke();
    }

  }

  paint () {
    requestAnimationFrame(() => {
      let radius = Math.random() * MAX_DROP_SIZE;
      let xDev = parseInt(Math.random() * MAX_DEVIATION) - MAX_DEVIATION / 2 - 1;
      let yDev = parseInt(Math.random() * MAX_DEVIATION) - MAX_DEVIATION / 2 - 1;
      let color = 'lightblue';
      this.buffers.front.ctx.beginPath();
      this.buffers.front.ctx.globalCompositeOperation = 'destination-out'
      this.buffers.front.ctx.arc(this.props.mouseX + xDev, this.props.mouseY + yDev, radius, 0, Math.PI * 2, true);
      // this.buffers.front.ctx.rect(this.props.mouseX + xDev, this.props.mouseY + yDev, radius, radius);

      this.buffers.front.ctx.fillStyle = color;
      this.buffers.front.ctx.fill();
      this.refresh();
    });
  }

  clear() {
    this.setCanvasDimensions();
    this.buffers.front.setSize(this.canvas.width, this.canvas.height);
    this.drawGrid(this.buffers.front);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.buffers.front.canvas, 0, 0);
  }

  refresh () {
    // this.ctx.drawImage(this.buffers.back.canvas, 0, 0);
    let size = MAX_DROP_SIZE * 2 + MAX_DEVIATION * 2;
    let x = this.props.mouseX - size / 2;
    let y = this.props.mouseY - size / 2 ;
    this.ctx.clearRect(x, y, size, size);
    // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.buffers.front.canvas, x, y, size, size, x, y, size, size);
  }

  handleResize () {
    requestAnimationFrame(() => {
      this.setCanvasDimensions();
      this.clear();
    });
  }

	render () {
		return <canvas id="background" ref={ e => this.canvas = e } ></canvas>
	}

}

class Buffer {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.ctx.canvas.width  = parseInt(width);
    this.ctx.canvas.height = parseInt(height);
  }

  setSize(width, height) {
    this.ctx.canvas.width  = parseInt(width);
    this.ctx.canvas.height = parseInt(height);
  }
}

module.exports = Background;
