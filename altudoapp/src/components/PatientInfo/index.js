import React from 'react';
import { Text, DateField } from '@sitecore-jss/sitecore-jss-react';

const PatientInfo = (props) => (
  <div>
    <p>PatientInfo Component</p>
    <h1>
      <Text field={props.fields.patientName} />
    </h1>
    <div>
      <Text field={props.fields.patientGender} />
    </div>
  </div>
);

export default PatientInfo;
