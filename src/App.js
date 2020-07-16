import React from "react";
import "./styles.scss";

export default class HelloUser extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "xxxxx xxx",
      number: "0000000000000000",
      month: "xx",
      day: "xx",
      ccv: "CCV"
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
  //CCV
  ccvChange(v) {
    this.setState({
      ccv: v.target.value
    });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "small-5 small-offset-1 columns " },
          React.createElement(
            "div",
            { className: "callout credit" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "small-6 columns" },
                React.createElement(
                  "h1",
                  { className: "credit__bank" },
                  "My Bank"
                )
              ),

              React.createElement(
                "div",
                { className: "small-6 columns" },
                React.createElement("img", {
                  className: "credit__mc",
                  src:
                    "https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_master_card-512.png",
                  alt: ""
                })
              )
            ),

            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "column" },
                React.createElement(
                  "p",
                  { className: "credit__card-number" },
                  this.state.number
                ),
                React.createElement(
                  "span",
                  { className: "credit__ccv" },
                  this.state.ccv
                )
              ),

              React.createElement(
                "div",
                { className: "small-9 columns" },
                React.createElement(
                  "label",
                  null,
                  "Card Holder",
                  React.createElement(
                    "p",
                    { className: "credit__name" },
                    this.state.name
                  )
                )
              ),

              React.createElement(
                "div",
                { className: "small-3 columns" },
                React.createElement(
                  "label",
                  null,
                  "Expires",
                  React.createElement(
                    "p",
                    { className: "credit__date" },
                    this.state.month,
                    " / ",
                    this.state.day
                  )
                )
              )
            )
          )
        ),

        React.createElement(
          "div",
          { className: "small-5 columns end" },
          React.createElement(
            "div",
            { className: "callout margin-top50" },
            React.createElement(
              "label",
              null,
              "NAME",
              React.createElement("input", {
                type: "text",
                onChange: this.nameChange.bind(this)
              })
            ),

            React.createElement(
              "label",
              null,
              "NUMBER",
              React.createElement("input", {
                type: "text",
                maxLength: "16",
                onChange: this.numberChange.bind(this)
              })
            ),

            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "label",
                { className: "column" },
                "EXPIRATION DATE"
              ),
              React.createElement(
                "div",
                { className: "small-4 columns" },
                React.createElement("input", {
                  type: "text",
                  maxLength: "2",
                  onChange: this.monthChange.bind(this)
                })
              ),

              React.createElement(
                "div",
                { className: "small-4 columns end" },
                React.createElement("input", {
                  type: "text",
                  maxLength: "2",
                  onChange: this.dayChange.bind(this)
                })
              )
            ),

            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "small-4 column" },
                React.createElement(
                  "label",
                  null,
                  "CCV",
                  React.createElement("input", {
                    type: "text",
                    maxLength: "3",
                    onChange: this.ccvChange.bind(this)
                  })
                )
              )
            )
          )
        )
      )
    );
  }
}
