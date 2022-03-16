import React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';

const FullImage = (props) => (
  <div>
    <p>FullImage Component</p>
    <Image field={props.fields.heroImage} />
    
  </div>
);

export default FullImage;
