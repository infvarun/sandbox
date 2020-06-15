import React from "react";

import CovidCardList from "./covid-card.component";
import RequestForm from "./request-form.component";
import testdata from "../testdata";

class CovidApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      covidData: testdata
    };
  }

  handleAddCard = (rcvdData, countryCode) => {
    //console.log("App", rcvdData);
    //console.log("countryCode", countryCode);
    const intermidiateData = {
      country: rcvdData.country,
      countrycode: countryCode,
      confirmed: rcvdData.provinces[0].confirmed,
      active: rcvdData.provinces[0].active,
      deaths: rcvdData.provinces[0].deaths,
      recovered: rcvdData.provinces[0].recovered
    };
    //console.log("App - updated with countrycode", intermidiateData);
    this.setState(prevState => ({
      covidData: [...prevState.covidData, intermidiateData]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="display-4">Covid cards consumes real Covid API</h1>
        <RequestForm onSubmit={this.handleAddCard} />
        <CovidCardList covidData={this.state.covidData} />
      </React.Fragment>
    );
  }
}

export default CovidApp;
