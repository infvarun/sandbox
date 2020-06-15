import React from "react";

class CovidCards extends React.Component {
  render() {
    const covidCase = this.props;
    const countryCode = "" + covidCase.countrycode;
    const imgUrl = `https://www.countryflags.io/${countryCode.toLowerCase()}/flat/64.png`;
    return (
      <div
        className="media"
        style={{
          marginTop: "10px",
          padding: "10px",
          borderStyle: "solid",
          borderColor: "#f7f7ee"
        }}
      >
        <img
          src={imgUrl}
          className="align-self-center mr-3"
          alt={covidCase.country}
          style={{
            verticalAlign: "middle",
            width: "70px",
            height: "70px",
            borderRadius: "30%"
          }}
        />
        <div className="media-body">
          <h5 className="mt-0">{covidCase.country}</h5>

          <div className="row">
            <div className="col-sm-3">
              <strong className="text-info">Total</strong>
            </div>
            <div className="col-sm-2">{covidCase.confirmed}</div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <strong className="text-danger">Active</strong>
            </div>
            <div className="col-sm-2">{covidCase.active}</div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <strong className="text-success">Recovered</strong>
            </div>
            <div className="col-sm-2">{covidCase.recovered}</div>
          </div>
        </div>
      </div>
    );
  }
}

// Create New component for generating list of cards
const CovidCardList = props => {
  return (
    <div className="col-sm-12">
      {props.covidData.map((data, index) => (
        <CovidCards key={index} {...data} />
      ))}

      {/* 
        when we use spread operator on object 
        we get props with all element of that object as key pair i.e.
        <CovidCards {...testData[1]} /> 
        will produce props as 
        <CovidCards name={testData[1].name} avatar={testData[1].avatar} company={testData[1].company}/>
        */}
    </div>
  );
};

export default CovidCardList;
