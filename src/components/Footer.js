import Inferno from 'inferno';

const Footer = props => (
  <div id="footer">
    <section id="copyrights">
        <p>
          Website designed and coded by me, using the Inferno framework. <br/>
          The source code is avalaible on this {" "}
          <a href="https://github.com/beurkinger/PersonalWebsite" target="_blank">
            GitHub repository
          </a>.
        </p>
    </section>
  </div>
)

module.exports = Footer;
