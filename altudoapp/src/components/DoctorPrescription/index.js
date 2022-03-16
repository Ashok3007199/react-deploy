import React from 'react';
import { RichText, DateField } from '@sitecore-jss/sitecore-jss-react';

const DoctorPrescription = (props) => (
  <div>
    <h1>DoctorPrescription</h1>
    <RichText field={props.fields.prescription} />
    <br />
    <DateField field={props.fields.dateOfPrescription} />
  </div>
);

export default DoctorPrescription;
