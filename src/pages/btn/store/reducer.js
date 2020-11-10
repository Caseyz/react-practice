import { ADDCOUNT, REDUCECOUNT, ISFIVE } from './actionTypes'

const defaultValue = {
    count: 0,
    isFive: 0
}

const reducer = (state = defaultValue, action) => {
    switch (action.type) {
        case ADDCOUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case REDUCECOUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case ISFIVE:
            return {
                ...state,
                isFive: action.payload
            }
        default:
            return state;
    }
}

export default reducer