import React, { Component } from 'react';
import './App.css';
import Product from './components/Product'
import productService from './services/productService';
import ImageCarousel from './components/ImageCarousel';
import './css/overlay.css';
import './css/product.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      thumbnails: [],
      showOverlay: false
    }

    this.openOverlay = this.openOverlay.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
    this.setSelectedProduct = this.setSelectedProduct.bind(this);

  }

  componentDidMount() {
    productService.getProducts()
      .then(productsData => {
        this.setState({
          products: productsData.groups
        });
      });
  }

  setSelectedProduct(idx) {
    this.setState({
      thumbnails: this.state.products[idx].images
    }, () => {
      this.openOverlay();
    });
  }

  openOverlay() {
    this.setState({
      showOverlay: true
    });
  }

  closeOverlay() {
    this.setState({
      showOverlay: false
    });
  }

  render() {
    return (
      <div className="App">

        <section className="productsSection">
          {this.state.products.map((product, i) =>
            <Product key={i} idx={i} setSelectedProduct={this.setSelectedProduct} {...product} />)}
        </section>

        {this.state.showOverlay &&
          <div>
            <div id="myNav" className="overlay open">
              <div className="close" onClick={this.closeOverlay}>X</div>
              
              <div className="overlay-content">
                <ImageCarousel thumbnails={this.state.thumbnails} />
              </div>

            </div>
          </div>
        }

      </div>
    )
  }
}

export default App;
