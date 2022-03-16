import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

class RelatedArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articleList: [],
      IncomingProps: props,
    };
  }

  getArticles = () => {
    fetch('/altudoapi/GetArticles')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            articleList: result,
            incomingProps: this.props,
          });

          console.log(this.state);
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  };
  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>
            <Text field={this.state.IncomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>Error Occured</div>
          </h1>
        </div>
      );
    } else if (!this.state.isLoaded) {
      return (
        <div>
          <h1>
            <Text field={this.state.IncomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>Loading...</div>
          </h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>
            <Text field={this.state.IncomingProps.fields.relatedArticleTitle} />
            <input type="button" onClick={this.getArticles} value="Show Articles" />
            <div>
              {this.state.articleList.map((HealthArticle) => (
                <li key={HealthArticle.Name}>
                  <div>{HealthArticle.Title}</div>
                  <br />
                  <div>{HealthArticle.Brief}</div>
                  <img src={HealthArticle.imageUrl} alt={HealthArticle.Title}></img>
                  <br />
                </li>
              ))}
            </div>
          </h1>
        </div>
      );
    }
  }
}
export default RelatedArticle;
