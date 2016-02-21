import AppDispatcher from '../dispatchers/AppDispatcher';

export default {
    addItem: (text) => {
        console.log('Login action dispatches to Store');

        AppDispatcher.dispatch({
            actionType: 'ADD_ACTION',
            text: text
        });
    }
}