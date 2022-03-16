import React from 'react';
import { DateField, Text } from '@sitecore-jss/sitecore-jss-react';

const PatientRecords = (props) => {
  const patientRecordsList = props.fields.records;
  return (
    <div>
      <h1>Patient Records </h1>
      {patientRecordsList &&
        patientRecordsList.map((listItem, index) => (
          <div key={`patientrecordslistitem-${index}`}>
            <p>
              <Text field={listItem.fields.prescription} />
            </p>
          </div>
        ))}
    </div>
  );
};

export default PatientRecords;
