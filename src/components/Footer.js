import Inferno from 'inferno';
import Component from 'inferno-component';

class Footer extends Component {

  shouldComponentUpdate () { return false; }

  render () {
    return (
      <section id="footer">
        <p>
          Website designed and coded by me, using the {" "}
          <a href="https://infernojs.org/">Inferno</a> framework. <br/>
          The source code is avalaible on this {" "}
          <a href="https://github.com/beurkinger/my-website-2017" target="_blank">
            GitHub repository
          </a>.
        </p>
      </section>
    )
  }
}

module.exports = Footer;
