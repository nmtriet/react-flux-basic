import BaseStore from './BaseStore';

class AppStore extends BaseStore {
    constructor() {
        super();

        // Register to Dispatcher
        // Povide callback function which receives the Action base on Action type
        this.subscribe(() => this._registerToActions.bind(this));

        this._items = {};
    } 

    _registerToActions(action) {
        switch(action.actionType) {
            case 'ADD_ACTION':
                console.log('Store receives Action with data: ' + action.text);

                this._create(action.text.trim());
                this.emitChange();
                break;

            default:
                break;
        };
    }

    // Create item and add to list
    _create(text) {
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        this._items[id] = {
            id: id,
            text: text
        };
    }

    // Get Method
    get items() { 
        return this._items;
    }
}
export default new AppStore();