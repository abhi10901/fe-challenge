import React, {Component} from 'react';
import Image from './Image';
import '../css/product.css'

class Product extends Component {

    constructor(props) {
        super(props);

        this.state = {
            heroImage: props.hero
        }

        this.showThumbnails = this.showThumbnails.bind(this);
    }

    showThumbnails() {
        this.props.setSelectedProduct(this.props.idx);
    }

    render() {
        return (
            <div className="productImage">
                <h5>
                    <span>{this.props.name}</span>
                </h5>
                <Image showThumbnails={this.showThumbnails} {...this.state.heroImage}/>

                <span className="priceText">${this.props.priceRange.selling.high}</span>
            </div>
        )
    }
}

export default Product;