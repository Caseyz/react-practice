import { ADDCOUNT, REDUCECOUNT } from './actionTypes'

const defaultValue = {
    count: 0
}

const reducer = (state = defaultValue, action) => {
    switch (action.type) {
        case ADDCOUNT:
            return {
                count: state.count + 1
            }
        case REDUCECOUNT:
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default reducer