import Inferno from 'inferno';
import {linkEvent} from 'inferno';
import Component from 'inferno-component';
import Email from './Email';

class Contact extends Component {

  constructor(props) {
		super(props);

    this.state = {
      email : '',
      message : '',
      error : false,
      errorMessage : '',
      sent : false
    }

    this.MIN_CHAR = 20;
  }

  getForm () {
    return (
      <form onSubmit={linkEvent(this, this.handleSubmit)}>
        {this.getErrorMessage()}
        <input  type="email"
                value={this.state.email}
                onInput={linkEvent(this, (s, e) => s.setState({ email : e.target.value}))}
                placeHolder="Your email address"/>
        <textarea value={this.state.message}
                  onInput={linkEvent(this, (s, e) => s.setState({ message : e.target.value}))}
                  placeholder="Type your message here"></textarea>
                <button>Send</button>
      </form>
    )
  }

  getErrorMessage () {
    if (this.state.error) return (
      <p><strong>{this.state.errorMessage}</strong></p>
    )
  }

  getThanks () {
    return <p><strong>Your message has been sent. Thanks !</strong></p>
  }

  handleSubmit (self, e) {
    e.preventDefault();
    let isError = false;
    if (!self.state.email || self.state.email.length < 6 ||
        self.state.email.search('@') === -1 || self.state.email.search('.') === -1) {
      self.setState({error : true, errorMessage : 'Please verify your email address.'});
    }
    else if (!self.state.message || self.state.message.length < self.MIN_CHAR ) {
      self.setState({error : true, errorMessage : 'Your message must be at least ' + self.MIN_CHAR + ' characters long.'});s
    }
    else {
      self.setState({error : false, sent : true});
    }
    return false;
  }

  render () {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <div class="row">
          <div class="col-1-2">
            <p>
              To contact me, you can send me an email to <Email/> or use the following form.
            </p>
            <p>
              I'm looking forward to hear from you !
            </p>
          </div>
          <div class="col-1-2">
            { this.state.sent ? this.getThanks() : this.getForm() }
          </div>
        </div>
      </section>
    )
  }
}

module.exports = Contact;
