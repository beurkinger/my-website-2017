import Inferno from 'inferno';

const About = props => (
  <section id="about">
    <h2>About</h2>
    <div class="row">
      <div class="col-1-2">
        <p>
          I'm a web developer with <strong>3 years of professional experience</strong>.
          I love things that look nice and feel right.
        </p>
        <p>
          These days I mostly do <strong>front-end</strong> stuff,
          and I'm experimenting with <strong>data visualization</strong>.
          I'm heavily into <strong>JavaScript</strong>, and I have a pretty good hold
          on <strong>Angular</strong>, <strong>React</strong>, <strong>Inferno</strong> and <strong>d3</strong>.
        </p>
        <p>
          Nevertheless I can also work server-side and write general-use scripts, thanks
          to my knowledge of <strong>PHP</strong> and <strong>Python</strong>. I spent
          two years working every day with the <strong>Symfony</strong> framework.
          I also write <strong>MySql</strong> queries in my spare time (ok not really but I have the know-how).
        </p>
        <p>
          Alongside my developer experience, I also studied <strong>UX design</strong> and
          a bit of <strong>graphic design</strong>. I have a very humble,
           "see if it sticks" approach to both of these fields, and I love
           working with talented people and learning from them.
        </p>
      </div>
      <div class="col-1-2">
        <p>My most important work experience : </p>
        <ul>
          <li>
            <strong>Front-end web developper & UX Designer</strong><br/>
             2016 - 2017 @ Agence Multimédia Sorbonne, Paris
          </li>
          <li>
            <strong>Full-stack web developper</strong><br/>
            2014 - 2016 @ Or’Normes Agency, Paris
          </li>
          <li>
            <strong>Freelance journalist</strong><br/>
            2011 - 2014 @ different magazines, France
          </li>
        </ul>
        <p>The schools I went to :</p>
        <ul>
          <li>
            <strong>Master's Degree in Interactive Multimedia (dev + ux + graphic design)</strong><br/>
            2016 - 2017 @ Paris I Sorbonne University, Paris
          </li>
          <li>
            <strong>Bachelor's Degree in Web Development</strong><br/>
              2014 - 2016 @ IPSSI School, Paris
          </li>
          <li>
            <strong>Master's degree in Communication Studies</strong><br/>
            2008 - 2013 @ Paris III University, Paris<br/>
            Passed with highest honour
          </li>
        </ul>
      </div>
    </div>
  </section>
)

module.exports = About;
