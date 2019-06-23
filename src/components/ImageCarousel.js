import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from './Image';
import '../css/product.css'

class ImageCarousel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            thumbnails: []
        }
    }

    componentDidMount() {
        this.setState({
            thumbnails: this.props.thumbnails
        })
    }

    render() {
        return (
            <Carousel showThumbs={false} className="productCarousel">

                {this.state.thumbnails.map((thumbnail, i) =>
                    <div>
                        <Image key={i} idx={i}  {...thumbnail} /> 
                        <p className="legend">Legend {i+1}</p>
                    </div>
                    )
                }

            </Carousel>
        );
    }
}

export default ImageCarousel;