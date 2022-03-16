import React from 'react';
import { RichText, Text, Image, Link } from '@sitecore-jss/sitecore-jss-react';

const HealthArticle = (props) => {
  const AuthorsList = props.fields.ArticleAuthors;
  return (
    <div>
      <h3>
        <Text field={props.fields.Title} />
      </h3>
      <h6>
        <RichText field={props.fields.Brief} />
      </h6>
      <p>
        <RichText field={props.fields.DetailedArticle} />
      </p>
      <div>
        <Image media={props.fields.ArticleImage} />
      </div>
      <div>
        <h4>List Of Doctors Available</h4>
        {AuthorsList &&
          AuthorsList.map((listItem, index) => (
            <div key={`DoctorInfoListItem-${index}`}>
              <h5>
                <Link field={listItem.fields.DoctorLink}></Link>
              </h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HealthArticle;
