import React from 'react';
import { render } from 'react-dom';
import Main from './Main.jsx';
import Nav from './Nav.jsx';
import AppStore from '../stores/AppStore';

class App extends React.Component {
    constructor() {
        super();
        this.state = this._getAppState();
    }

    _getAppState() {
        return {
            items: AppStore.items,
        };
    }

    componentDidMount() {
        this._listener = state => this.setState(this._getAppState());
        AppStore.addChangeListener(this._listener);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._listener);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Nav />
                    <Main items={this.state.items} />
                </div>
            </div>
        );
    }
}
module.exports = App;