import dictionary from '../fixtures/words.json';

const initialState = {
    dictionary
};

export default function reducer(state =  initialState, action) {
    switch(action.type) {
        default:
            return state; 
    }
}