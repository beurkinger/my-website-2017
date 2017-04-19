import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

const STROKE_SIZE = 20;
const PAINT_COLOR = '#000';

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

class Background extends Component {

  constructor(props) {
		super(props);

    this.canvas = null;
    this.ctx = null;
    this.buffer = null;

    this.props = { mouseX : -1, mouseY : -1 };

    this.paint = this.paint.bind(this);
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
    if (this.props.mouseX !== -1 && this.props.mouseY !== -1)
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

  clear() {
    this.setCanvasDimensions();
    this.buffer.setSize(this.canvas.width, this.canvas.height);
    this.fillBuffer(this.buffer);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.buffer.canvas, 0, 0);
  }

  newRefresh (oldProps, nextProps) {
    //Only redraw the part of the screen that has been updated. CPU happy.
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

module.exports = Background;
