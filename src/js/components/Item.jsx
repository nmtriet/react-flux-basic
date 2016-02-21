import React, {PropTypes} from 'react';
import { render } from 'react-dom';

class Item extends React.Component {
    render() {
        return (
            <li key={this.props.data.id}>
                <label>{this.props.data.text}</label>
            </li>
        );
    }
}
module.exports = Item;

Item.propTypes = {
    data: PropTypes.object.isRequired
}