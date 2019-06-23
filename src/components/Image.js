import React, {Component} from 'react';

class Image extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <img 
                src={this.props.href}
                alt={this.props.alt}
                height = {this.props.height}
                meta = {this.props.meta}
                rel = {this.props.rel}
                size = {this.props.size}
                width = {this.props.width}
                onClick = {this.props.showThumbnails}
            />
        )
    }
}

export default Image;