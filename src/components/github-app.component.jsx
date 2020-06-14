import React from "react";

import GithubCardList from "./github-card.component";
import RequestForm from "./request-form.component";

class GithubApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testData: [
        {
          name: "Dan Abramov",
          avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
          company: "@facebook"
        },
        {
          name: "Sophie Alpert",
          avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4",
          company: "Humu"
        },
        {
          name: "Sebastian Markbåge",
          avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4",
          company: "Facebook"
        }
      ]
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="display-4">Github cards consumes real github API</h1>
        <RequestForm />
        <GithubCardList profiles={this.state.testData} />
      </React.Fragment>
    );
  }
}

export default GithubApp;
