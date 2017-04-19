import Inferno from 'inferno';

const Footer = props => (
  <section id="footer">
    <p>
      Website designed and coded by me, using the {" "}
      <a href="https://infernojs.org/">Inferno</a> framework. <br/>
      The source code is avalaible on this {" "}
      <a href="https://github.com/beurkinger/PersonalWebsite" target="_blank">
        GitHub repository
      </a>.
    </p>
  </section>
)

module.exports = Footer;
