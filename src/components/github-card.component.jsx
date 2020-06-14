import React from "react";

class GithubCards extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="media" style={{ marginTop: "10px" }}>
        <img
          src={profile.avatar_url}
          className="mr-3"
          width="75px"
          alt={profile.name}
        />
        <div className="media-body">
          <h5 className="mt-0">{profile.name}</h5>
          {profile.company}
        </div>
      </div>
    );
  }
}

// Create New component for generating list of cards
const GithubCardList = props => {
  return (
    <div className="col-sm-12">
      {props.profiles.map((data, index) => (
        <GithubCards key={index} {...data} />
      ))}

      {/* 
      when we use spread operator on object 
      we get props with all element of that object as key pair i.e.
      <GithubCards {...testData[1]} /> 
      will produce props as 
      <GithubCards name={testData[1].name} avatar={testData[1].avatar} company={testData[1].company}/>
      */}
    </div>
  );
};

export default GithubCardList;
