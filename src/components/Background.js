import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

const GRID_SIZE = 33;
const GRID_COLOR = '#000';
const STROKE_SIZE = 10;
const MAX_DROP_SIZE = 10;
const MAX_DEVIATION = 8;
const PAINT_COLOR = 'lightblue';

class Background extends Component {

  constructor(props) {
		super(props);

    this.canvas = null;
    this.ctx = null;
    this.buffer = null;

    this.props = { mouseX : -1, mouseY : -1 };

    this.paint = this.paint.bind(this);
    // this.drip = this.drip.bind(this);
    this.handleResize = this.handleResize.bind(this);
	}


  componentDidMount () {
    this.setCanvasDimensions();
    this.createBuffer();
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = false;
    this.clear();

    window.onresize = this.handleResize;
  }

  shouldComponentUpdate (nextProps) {
    // if (this.props.mouseX !== -1 && this.props.mouseY !== -1) 
      this.paint(this.props, nextProps);
    return false;
  }


  setCanvasDimensions () {
    this.canvas.width = document.documentElement.clientWidth;
    this.canvas.height = document.documentElement.clientHeight;
  }

  createBuffer () {
    this.buffer = new Buffer(this.canvas.width, this.canvas.height);
    this.fillBuffer(this.buffer);
  }

  fillBuffer (buffer) {
    buffer.ctx.beginPath();
    buffer.ctx.rect(0, 0, buffer.canvas.width, buffer.canvas.height);
    buffer.ctx.fillStyle = '#FFF';
    buffer.ctx.fill();
    buffer.ctx.closePath();
  }

  // drawGrid (buffer) {
  //   let nbSquaresX = Math.ceil(buffer.canvas.width / GRID_SIZE);
  //   let nbSquaresY = Math.ceil(buffer.canvas.height / GRID_SIZE);
  //   buffer.ctx.beginPath();
  //   buffer.ctx.rect(0, 0, buffer.canvas.width, buffer.canvas.height);
  //   buffer.ctx.fillStyle = '#FFF';
  //   buffer.ctx.fill();
  //   buffer.ctx.closePath();
  //
  //   buffer.ctx.lineWidth = 1;
  //   buffer.ctx.strokeStyle = GRID_COLOR;
  //   buffer.ctx.beginPath();
  //
  //   for (let i = 0; i < nbSquaresX; i++) {
  //     buffer.ctx.moveTo(i * GRID_SIZE, 0);
  //     buffer.ctx.lineTo(i * GRID_SIZE, buffer.canvas.height);
  //     buffer.ctx.stroke();
  //   }
  //   for (let i = 0; i < nbSquaresY; i++) {
  //     buffer.ctx.moveTo(0, i * GRID_SIZE);
  //     buffer.ctx.lineTo(buffer.canvas.width, i * GRID_SIZE);
  //     buffer.ctx.stroke();
  //   }
  // }

  paint (oldProps, nextProps) {
    requestAnimationFrame(() => {
      this.buffer.ctx.globalCompositeOperation = 'destination-out'
      this.buffer.ctx.lineWidth = STROKE_SIZE;
      this.buffer.ctx.strokeStyle = PAINT_COLOR;
      this.buffer.ctx.lineCap = 'round';

      this.buffer.ctx.beginPath();
      this.buffer.ctx.moveTo(oldProps.mouseX, oldProps.mouseY);
      this.buffer.ctx.lineTo(nextProps.mouseX, nextProps.mouseY);
      this.buffer.ctx.stroke();
      this.newRefresh(oldProps, nextProps);
    });
  }

  // drip () {
  //   requestAnimationFrame(() => {
  //     let radius = Math.random() * MAX_DROP_SIZE;
  //     let xDev = parseInt(Math.random() * MAX_DEVIATION) - MAX_DEVIATION / 2 - 1;
  //     let yDev = parseInt(Math.random() * MAX_DEVIATION) - MAX_DEVIATION / 2 - 1;
  //     this.buffer.ctx.globalCompositeOperation = 'destination-out'
  //     this.buffer.ctx.fillStyle = PAINT_COLOR;
  //
  //     this.buffer.ctx.beginPath();
  //     this.buffer.ctx.arc(this.props.mouseX + xDev, this.props.mouseY + yDev, radius, 0, Math.PI * 2, true);
  //     this.buffer.ctx.fill();
  //     this.refresh();
  //   });
  // }

  clear() {
    this.setCanvasDimensions();
    this.buffer.setSize(this.canvas.width, this.canvas.height);
    this.fillBuffer(this.buffer);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.buffer.canvas, 0, 0);
  }

  // refresh () {
  //   let size = MAX_DROP_SIZE * 2 + MAX_DEVIATION * 2;
  //   let x = this.props.mouseX - size / 2;
  //   let y = this.props.mouseY - size / 2 ;
  //   this.ctx.clearRect(x, y, size, size);
  //   this.ctx.drawImage(this.buffers.front.canvas, x, y, size, size, x, y, size, size);
  // }

  newRefresh (oldProps, nextProps) {
    //Only redraw the part of the screen that has been updated. Nice perf boost. CPU happy.
    let x = oldProps.mouseX;
    let y = oldProps.mouseY;
    let width = nextProps.mouseX - oldProps.mouseX;
    let height = nextProps.mouseY - oldProps.mouseY;

    x += width < 0 ? STROKE_SIZE / 1.5 : - STROKE_SIZE / 1.5;
    y += height < 0 ? STROKE_SIZE / 1.5 : - STROKE_SIZE / 1.5;
    width += width < 0 ? - STROKE_SIZE * 1.5 : STROKE_SIZE * 1.5;
    height += height < 0 ? - STROKE_SIZE * 1.5 : STROKE_SIZE * 1.5;

    this.ctx.clearRect(x, y, width, height);
    this.ctx.drawImage(this.buffer.canvas, x, y, width, height, x, y, width, height);
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
