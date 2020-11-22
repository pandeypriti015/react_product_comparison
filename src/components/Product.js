import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addProduct, removeProduct } from '../redux/actions';
import CloseIcon from '@material-ui/icons/Close';



const Product = ({product,response,key,dropdown, onAddToComparison, onRemoveFromComparison, comparedProducts}) =>
    <div key={key} style={{maxWidth:"33.33%"}} >
        <div className="product">
            <div className="card">
                <div>
                <img className="card-img-top" src={response.compareSummary.images[product]} alt={response.compareSummary.titles[product].title} />

                </div>
                <div>
                <button className="btn" onClick={() => onRemoveFromComparison(product)}><CloseIcon></CloseIcon></button> 

                </div>
                
                
                
            </div>
            <div className="card-body">
                <div>
                    <div>
                        <h5 className="card-title">
                            {response.compareSummary.titles[product].title}<br />
                            <small>{product.description}</small>
                        </h5>
                    </div>
                    <div style={{display:"inline"}}>
                        <span className="price-tag" >{"Rs."+parseInt(response.compareSummary.productPricingSummary[product].finalPrice)}</span>
                            <span className="price-tag" style={{color:"grey"}}>&nbsp;&nbsp;<s>{"  Rs."+parseInt(response.compareSummary.productPricingSummary[product].price)+"  "}</s></span>
                            <span className="price-tag" style={{color:"green"}}> &nbsp;&nbsp;{response.compareSummary.productPricingSummary[product].totalDiscount+"% off"}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
;

Product.propTypes = {
    product : PropTypes.array.isRequired,
    dropdown:PropTypes.array.isRequired,
    response:PropTypes.object.isRequired,
    onAddToComparison : PropTypes.func.isRequired,
    onRemoveFromComparison : PropTypes.func.isRequired,
    comparedProducts : PropTypes.array.isRequired,
    key:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    comparedProducts : state.products
});

const mapDispatchToProps = dispatch => ({
    onAddToComparison : (product) => dispatch(addProduct(product)),
    onRemoveFromComparison : (product) => dispatch(removeProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);