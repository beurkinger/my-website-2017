import Inferno from 'inferno';
import {linkEvent} from 'inferno';
import Component from 'inferno-component';
import Email from './Email';
import httpPostHelper from '../helpers/httpPostHelper';
import {REST_CONTACT_PATH} from '../constants';


class Contact extends Component {

  constructor(props) {
		super(props);

    this.state = {
      email : '',
      message : '',
      isSending : false,
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
                placeHolder="Your email address"
                required />
        <textarea value={this.state.message}
                  onInput={linkEvent(this, (s, e) => s.setState({ message : e.target.value}))}
                  placeholder="Type your message here"
                  required ></textarea>
        <button type="submit">{this.getButtonText()}</button>
      </form>
    )
  }

  getButtonText () {
    return this.state.isSending ? 'Sending...' : 'Send';
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
    let state = self.state;
    if (state.isSending) return false;
    self.setState({isSending : true});
    if (!state.email || state.email.length < 6 ||
        state.email.search('@') === -1 || state.email.search('.') === -1) {
      self.setState({isSending: false, error : true, errorMessage : 'Please verify your email address.'});
    }
    else if (!state.message || state.message.length < self.MIN_CHAR ) {
      self.setState({isSending: false, error : true, errorMessage : 'Your message must be at least ' + self.MIN_CHAR + ' characters long.'});s
    }
    else {
      self.sendData(state);
    }
    return false;
  }

  sendData (state) {
    httpPostHelper(REST_CONTACT_PATH, state, () => {
      this.setState({error : false, isSending : false, sent : true});
    },
    () => {
      this.setState({error : true, errorMessage : 'There was an error. Please verify the form and try again.', isSending : false, sent : false});
    });
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
