import React, { Component } from "react";
import Loader from "./common/Loader";
import { loadProducts } from "../api/api";
import Product from "./Product";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { addProduct,UpdateList,UpdateResponse,UpdateDifference} from '../redux/actions';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      droop: "",
      list:[]
    };
  }

  handleChange = (event) => {
   console.log(this.props.products)
   let product=this.props.products
   console.log(product)
   product.push(event.target.value)
   console.log(event.target.value,product)
   this.setState({list:product})
   this.props.onAddToComparison(product);

  };

  handleShowDifference=()=>{
      console.log(this.props.showOnlyDifference)
      this.props.onUpdateDifference(!this.props.showOnlyDifference)
  }

  componentDidMount() {
    loadProducts().then((data) => {
      this.setState({ loading: false });
      this.props.onUpdateResponse(data.products)
    //   this.props.dispatch({ type: "ADD_RESPONSE", target: data.products });
      let product = [],
        dropdownList = [];
      for (var item in data.products.compareSummary.titles) {
        product = [item];
        dropdownList.push(data.products.compareSummary.titles[item]);
      }
      this.props.onAddToComparison(product);
      this.props.onUpdateList(data.products.compareSummary.titles)
    //   this.props.dispatch({ type: "UPDATE_LIST", target: data.products.compareSummary.titles});
    });
  }

  render() {
    const { loading } = this.state;
    const { products, response, dropdownList } = this.props;
    console.log(this.props.products, this.props.dropdownList,"aaaaaaaaa");

    return loading ? (
      <Loader />
    ) : (
      <div className="row">
        <div style={{width:"33.33%"}}>
          <h1>Compare</h1>
          <p>{products.length} item selected</p>
         <div className="shw-diff"> <input type="checkbox" onChange={()=>this.handleShowDifference()} /><label>Show only differences</label></div>
        </div>
        
          {products.map((product,index) => (
            <Product
              product={product}
              response={response}
              dropdownList={dropdownList}
              key={index+product+Math.random()*10000}
            />
          ))}
     
        { products.length<=1&& <div style={{width:"33.33%"}} >
          <div>
            <div className="product">
              <div className="card">
                <div className="dummy-pic"></div>
              </div>
              <div className="card-body">
                <h4 style={{ paddingLeft: "7%" }}>Add a product</h4>
                <FormControl>
                  <Select
                    value={this.state.droop}
                    onChange={this.handleChange}
                    displayEmpty
                    className=""
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="" disabled>
                      Placeholder
                    </MenuItem>
                    {
                        Object.keys(dropdownList).map((item)=>
                            
                        {   if(!products.includes(item))
                            return<MenuItem value={item}>{dropdownList[item].title}</MenuItem>}

                        )
                        
                    }
                    
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  response: state.response,
  dropdownList: state.dropdownList,
  showOnlyDifference:state.showOnlyDifference
});

const mapDispatchToProps = dispatch => ({
    onAddToComparison : (product) => dispatch(addProduct(product)),
    onUpdateList:(list)=>dispatch(UpdateList(list)),
    onUpdateResponse:(response)=>dispatch(UpdateResponse(response)),
    onUpdateDifference:(response)=>dispatch(UpdateDifference(response))
});


export default connect(mapStateToProps,mapDispatchToProps)(Products);
