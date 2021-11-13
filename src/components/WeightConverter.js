import React, { Component } from "react";

export class WeightConverter extends Component {
  state = {
    pounds: "",
  };
  onHandlePounds = (e) => {
    // const pounds = e.target.value;

    this.setState({
      pounds: e.target.value,

      //   milligrams: pounds * 453592,
      //   grams: pounds * 453.592,
      //   kilograms: pounds * 0.453592,
    });
  };
  render() {
    // var pounds = "";
    // var milligrams = 0.01;
    // const grams = 0.001;
    // const kilograms = 1000;

    const milligrams = this.state.pounds * 453592;
    const grams = this.state.pounds * 453.592;
    const kilograms = this.state.pounds * 0.453592;

    // const pounds = {
    //   milligrams: pounds * 453592,
    //   grams: pounds * 453.592,
    //   kilograms: pounds * 0.453592,
    // };

    return (
      <div>
        <h1 style={{ color: "white" }}>Weight Converter</h1>
        <form>
          <div>
            <input
              style={{ padding: "20px", width: "45.5%" }}
              type="number"
              placeholder="Enter Pounds...."
              onChange={this.onHandlePounds}
              value={this.state.pounds}
            />
          </div>
        </form>
        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "blue",
              width: "50%",
            }}
          >
            <h1 style={{ color: "white" }}>Milligrams:</h1>
            <div>{milligrams}</div>
          </div>
          <div style={{ backgroundColor: "red", width: "50%", margin: "10px" }}>
            <h1 style={{ color: "white" }}>Grams:</h1>
            <div>{grams}</div>
          </div>
          <div style={{ backgroundColor: "green", width: "50%" }}>
            <h1 style={{ color: "white" }}>KiloGrams:</h1>
            <div>{kilograms}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeightConverter;
