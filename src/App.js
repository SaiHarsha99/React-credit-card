import React from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class creditCard extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      number: "",
      month: "",
      day: "",
      cvv: "",
      cardType: "💳"
    };
  }

  //Name of Card Owner
  nameChange(n) {
    this.setState({
      name: n.target.value
    });
  }
  //Card Number
  numberChange(c) {
    this.setState({
      number: c.target.value
    });
    const cardNumber = c.target.value;
    this.setState({ cardNumber }, () => {
      const { cardNumber } = this.state;
      if (cardNumber[0] === "1") {
        this.setCardType("Visa");
      } else if (cardNumber[0] === "2") {
        this.setCardType("Syndicate");
      } else if (cardNumber[0] === "3") {
        this.setCardType("AXIS");
      } else if (cardNumber[0] === "4") {
        this.setCardType("American Express");
      } else if (cardNumber[0] === "5") {
        this.setCardType("Discover");
      } else if (cardNumber[0] === "6") {
        this.setCardType("JCB");
      } else if (cardNumber[0] === "7") {
        this.setCardType("Diners Club");
      } else if (cardNumber[0] === "8") {
        this.setCardType("Forex");
      } else if (cardNumber[0] === "9") {
        this.setCardType("MasterCard");
      } else {
        this.setCardType("💳");
      }
    });
  }

  //Expiration
  monthChange(m) {
    this.setState({
      month: m.target.value
    });
  }
  dayChange(d) {
    this.setState({
      day: d.target.value
    });
  }
  //cvv
  cvvChange(v) {
    this.setState({
      cvv: v.target.value
    });
  }

  setCardType = type => {
    this.setState({ cardType: type });
  };

  createCard(d) {
    d.preventDefault();
    alert(" Congrats you have designed your Card successfully!!");
    this.setState({
      name: " ",
      number: " ",
      month: " ",
      day: " ",
      cvv: " ",
      cardType: "💳"
    });
  }

  render() {
    return (
      <div>
        <div className="container1">
          <div className="small-5 small-offset-1 columns">
            <div className="callout credit">
              <div className="row">
                <div className="small-6 columns">
                  <h1 className="credit__bank">My Card</h1>
                  <span className="credit__type">{this.state.cardType}</span>
                </div>

                <div className="small-6 columns">
                  <img
                    className="credit__mc"
                    src="https=//cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <label>Card Number</label>
                  <p className="credit__card-number">{this.state.number}</p>

                  <span className="credit__cvv">
                    <label>CVV</label> {this.state.cvv}
                  </span>
                </div>

                <div className="small-9 columns">
                  <label>Card Holder</label>
                  <p className="credit__name"> {this.state.name}</p>
                </div>

                <div className="small-3 columns">
                  <label>Expiry</label>
                  <p className="credit__date">
                    {this.state.month} / {this.state.day}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3> Design Your Card:</h3>
        <div className="container">
          <form className="card-form" onSubmit={this.createCard.bind(this)}>
            <label className="input-label">Card Holder Name</label>
            <input
              type="text"
              placeholder="Enter card holder name"
              value={this.state.name}
              onChange={this.nameChange.bind(this)}
              className="text-input"
              maxLength="15"
              required="required"
            />
            <label className="input-label">
              Credit Card Number(Cannot have letters)
            </label>
            <input
              placeholder="Enter your credit card number"
              id="number-input"
              name="number-input"
              className="text-input"
              type="text"
              value={this.state.number}
              pattern="\d*"
              maxlength="16"
              required="required"
              onChange={this.numberChange.bind(this)}
            />

            <div className="date-and-csv" style={{ display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%"
                }}
              >
                <label className="input-label">Expiration Date</label>
                <input
                  type="number"
                  max="99"
                  placeholder="Enter expiration month"
                  className="text-input"
                  value={this.state.month}
                  style={{
                    height: "23px",
                    fontSize: "16px",
                    fontWeight: "100"
                  }}
                  required="required"
                  onChange={this.monthChange.bind(this)}
                />
                <input
                  type="number"
                  max="99"
                  placeholder="Enter expiration day"
                  className="text-input"
                  value={this.state.day}
                  style={{
                    height: "23px",
                    fontSize: "16px",
                    fontWeight: "100"
                  }}
                  required="required"
                  onChange={this.dayChange.bind(this)}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%"
                }}
              >
                <label className="input-label">CVV Security Code</label>
                <input
                  type="number"
                  placeholder="Enter CVV"
                  max="999"
                  value={this.state.cvv}
                  className="text-input"
                  required="required"
                  onChange={this.cvvChange.bind(this)}
                />
              </div>
            </div>
            <hr />
            <button className="btn btn-md">Create</button>
          </form>
        </div>
      </div>
    );
  }
}
