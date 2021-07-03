import React from 'react';

import '../Common/index.css';
import FormRow from './FormRow';
import { Spinner } from 'react-bootstrap';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      company_name: '',
      email: '',
      error: '',
      project: '',
      loading: false,
      buttonStyle: { textAlign: 'center', marginTop: '54px' },
    }
  }

  validateInputs = (inputs) => {
    return Object.values(inputs).every(input => input.trim().length !== 0);
  }

  submitForm = (e) => {
    e.preventDefault();
    const { name, company_name, email, project } = this.state;
    this.setState({ loading: true });

    const inputs = { name, company_name, email, project };
    const inputsAreValid = this.validateInputs(inputs);

    if (inputsAreValid) {
      const call = async () => {
        await fetch(
          'http://localhost:5000/contact_us',
          {
            method: 'POST',
            mode:'cors',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(inputs),
          }
        ).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.log(error);
        });
      };

      call();

      window.setTimeout(() => {
        this.setState({ loading: false });
      }, 3000);
    } else {
      this.setState({ loading: false, error: 'All fields are required.' });
    }
  }

  changeField = (e, field) => {
    this.setState({
      error: '',
      [field]: e.target.value,
    });
  }

  moveSendUp = () => {
    this.setState({
      buttonStyle: {
        ...this.state.buttonStyle,
        marginTop: '51px',
      },
    });
  }

  moveSendDown = () => {
    this.setState({
      buttonStyle: {
        ...this.state.buttonStyle,
        marginTop: '54px',
      },
    });
  }

  render() {
    const questions = [
      { label: 'name', text: 'YOUR NAME' },
      { label: 'company_name', text: 'COMPANY NAME' },
      { label: 'email', text: 'EMAIL' },
    ];

    const { loading } = this.state;

    return (
      <div id="contact_us">
        <h2 className="title">GET YOUR FREE ESTIMATE</h2>
        <h4 className="title sub-title">Contact Us</h4>
        <div className="content">
          <form>
            {questions.map((question) => {
              return <FormRow {...question}
                              key={question.label}
                              onChange={this.changeField}
                              value={this.state[question.label]} />
            })}
            <div className="contact-form-row" style={{ marginTop: '54px' }}>
              <div className="contact-form-column">
                TELL US ABOUT YOUR PROJECT:
              </div>
              <div className="contact-form-column">
                <textarea className="contact-text-area"
                          rows={3}
                          onFocus={this.moveSendUp}
                          onBlur={this.moveSendDown}
                          onChange={(e) => this.changeField(e, 'project')}>
                </textarea>
              </div>
            </div>
            <div style={this.state.buttonStyle}>
              <button className="submit" onClick={this.submitForm}>
                SEND {' '}
                {loading &&
                  <span style={{ fontSize: '24px', position: 'relative', top: '-5px' }}>
                    <Spinner as="span"
                             animation="border"
                             role="status"
                             aria-hidden="true" />
                  </span>
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactUs;
