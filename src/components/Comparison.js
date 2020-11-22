import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Comparison extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productlist: this.props.products,
    };
  }

  render() {
    const { response, products } = this.props;

    var resp = JSON.parse(JSON.stringify(this.props.response));


    if (products.length > 1 &&this.props.showOnlyDifference) {
      let result = [];
      console.log(this.props.showOnlyDifference,"hhhh")

      resp.featuresList.forEach((element) => {
        var temp = {};
        temp["features"] = element.features.filter((ele) => {
          return ele.values[products[0]] != ele.values[products[1]];
        });
        result.push(temp);
      });
      resp["featuresList"] = result;
      console.log(resp);
    }

    console.log(products, "jjjjjjjjjj");
    return products.length >= 1 ? (
      <div className="row1" keys={Math.random() * 2000}>
        {console.log(products, "ggggggg")}
        <div>
          <table className="tbl-header">
            <thead>
              <tr>
                <th>DISPLAY</th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[0].features.map((item) => (
                <tr>
                  <td>{item.featureName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th>GENERAL FEATURES</th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[1].features.map((item) => (
                <tr>
                  <td>{item.featureName}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th>INTERNET FEATURES</th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[2].features.map((item) => (
                <tr>
                  <td>{item.featureName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[0].features.map((item) => (
                <tr>
                  <td>{item.values[products[0]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[1].features.map((item) => (
                <tr>
                  <td>{item.values[products[0]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[2].features.map((item) => (
                <tr>
                  <td>{item.values[products[0]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          key={
            products[1]
              ? products[1] + Math.random() * 30000
              : Math.random() * 20000
          }
        >
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[0].features.map((item) => (
                <tr>
                  <td>
                    {item.values[products[1]] ? item.values[products[1]] : "  "}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[1].features.map((item) => (
                <tr>
                  <td>{item.values[products[1]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="tbl-header">
            <thead>
              <tr>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {resp.featuresList[2].features.map((item) => (
                <tr>
                  <td>{item.values[products[1]]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ) : (
      <div></div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  response: state.response,
  showOnlyDifference:state.showOnlyDifference
});

export default connect(mapStateToProps)(Comparison);
