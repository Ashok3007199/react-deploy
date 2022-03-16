import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const ArticleDetails = ({ fields, displayname }) => (
  <div>
    <p>{displayname}</p>
    <h1>
      <Text field={fields.heading} />
    </h1>
    <p>
      <Text field={fields.shortDescription} />
    </p>
    <p>
      <RichText field={fields.detailedBlog} />
    </p>
  </div>
);

export default ArticleDetails;
