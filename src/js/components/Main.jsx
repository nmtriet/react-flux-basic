import React from 'react';
import { render } from 'react-dom';
import AppAction from '../actions/AppAction';
import Item from './Item.jsx';

class Main extends React.Component {
    _onAddItem() {
        if (document.getElementById('inputData').value != '') { 
            AppAction.addItem(document.getElementById('inputData').value);
            document.getElementById('inputData').value = '';
        }
    }

    render() {
        var items = this.props.items;
        var list = [];

        for (var key in items) {
            list.push(<Item key={key} data={items[key]} />);
        }

        return (
            <div>
                <p>Please enter data into the textbox and press Add button to insert new item to list</p>
                <div className="col-lg-4">
                    <input type="text" className="form-control" id="inputData" />
                </div>
                <button className="btn btn-default" onClick={this._onAddItem}>Add</button>
                
                <ul id="main-list" style={{"margin-top": "10px"}}>
                    {list}
                </ul>
            </div>
        );
    }
}
module.exports = Main;