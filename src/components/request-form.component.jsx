import React from "react";
import Axios from "axios";

class RequestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      yesterday: ""
    };
  }

  /**
   * Get yesterdays date when component mounts
   */
  componentDidMount() {
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    let dd = yesterday.getDate();
    let mm = yesterday.getMonth() + 1; //January is 0!

    var yyyy = yesterday.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    yesterday = yyyy + "-" + mm + "-" + dd;
    this.setState({ yesterday: yesterday });
  }

  /**
   * Handle User Input in input box
   */
  handleChange = event => {
    this.setState({ userInput: event.target.value });
  };

  /**
   * Get Country Code for country name
   */
  getCountryCode = async countryName => {
    try {
      const res = await Axios.get(
        `https://restcountries-v1.p.rapidapi.com/name/${countryName}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "i92sxPs04tmshFcoIc4T9X9A8zgPp1j91abjsnoAC9L2R0SCpz"
          }
        }
      );

      console.log("Country info", res.data);
      let countryCode = "";
      res.data.forEach(d => {
        if (d.name === countryName) {
          countryCode = d.alpha2Code;
        }
      });

      return countryCode;
    } catch (err) {
      /*swallow this*/
    }
  };

  /**
   * Handle form submit
   */
  handleSubmit = async event => {
    event.preventDefault();
    //console.log(this.state.userInput);

    try {
      const res = await Axios.get(
        `https://covid-19-data.p.rapidapi.com/report/country/name?date-format=YYYY-MM-DD&format=json&date=${
          this.state.yesterday
        }&name=${this.state.userInput}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key":
              "i92sxPs04tmshFcoIc4T9X9A8zgPp1j91abjsnoAC9L2R0SCpz"
          }
        }
      );

      const countrycode = await this.getCountryCode(res.data[0].country);
      //console.log("COVID API fetched for: " + this.state.yesterday, res);
      // Invoke parent (CovidApp) method sent as prop to set data
      this.props.onSubmit(res.data[0], countrycode);
    } catch (err) {
      console.error("Country Not Found: ", err);
    }
  };

  render() {
    return (
      <div className="col-sm-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">
                  Provide Country Name to Add card
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="See Covid 19 Update for?"
                  value={this.state.userInput}
                  onChange={this.handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary">Add Card</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RequestForm;
