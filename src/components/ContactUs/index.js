import React from 'react';

import '../Common/index.css';
import FormRow from './FormRow';
import Loading from '../Common/Loading';
import { Spinner } from 'react-bootstrap';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      company_name: '',
      email: '',
      project: '',
      loading: false,
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    const { name, company_name, email, project } = this.state;
    this.setState({ loading: true });

    console.log({ name, company_name, email, project });
    window.setTimeout(() => {
      this.setState({ loading: false });
    }, 3000);
  }

  changeField = (e, field) => {
    this.setState({
      [field]: e.target.value,
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
      <div>
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
                          onChange={(e) => this.changeField(e, 'project')}>

                </textarea>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '54px' }}>
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