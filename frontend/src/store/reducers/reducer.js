import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: {
        shoe: 5,
        shirt: 6
    }
}

const reducers = ( state=initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state, 
                shoe: state.shoe + 2 
            } 


    }
}

export default reducers