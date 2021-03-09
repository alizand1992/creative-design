import React from 'react';

import './index.css';

const FormRow = ({ label, text, value, onChange }) => {
  return (
    <div className="contact-form-row">
      <div className="contact-form-column">
        <label htmlFor={label}>{text}:</label>
      </div>
      <div className="contact-form-column">
        <input xid={label}
               className="contact-input-text"
               value={value}
               onChange={(e) => onChange(e, label)} />
      </div>
    </div>
  );
};

export default FormRow;
