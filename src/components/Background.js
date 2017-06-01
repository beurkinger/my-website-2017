import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

const STROKE_SIZE = 16;
const PAINT_COLOR = '#000';

class Buffer {
  constructor(width, height) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext("2d");
    this.ctx.imageSmoothingEnabled = true;
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
    this.ctx.imageSmoothingEnabled = true;
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
    //Only redraw the part of the screen that has been update. CPU happy.

    //We get the coordinates of the squares formed by the coordinates of old and new mouse positions
    let x = oldProps.mouseX < nextProps.mouseX ? oldProps.mouseX : nextProps.mouseX ;
    let y = oldProps.mouseY < nextProps.mouseY ? oldProps.mouseY : nextProps.mouseY ;
    let width = Math.abs(nextProps.mouseX - oldProps.mouseX);
    let height = Math.abs(nextProps.mouseY - oldProps.mouseY);

    //We add some space for the line
    x -= STROKE_SIZE;
    y -= STROKE_SIZE;
    width += STROKE_SIZE * 2;
    height += STROKE_SIZE * 2;

    //Fixes for stupid Safari who doesn't like it when I try to draw outside the canvas
    x = x <= 0 ? 0 : x;
    y = y <= 0 ? 0 : y;

    if ((x + width) >= (this.canvas.width)) {
      let diff = (x + width) - this.canvas.width;
      width -= diff;
    }

    if ((y + height) >= (this.canvas.height)) {
      let diff = (y + height) - this.canvas.height;
      height -= diff;
    }

    //We clear and redraw the part that need to be updated
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
