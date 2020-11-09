import { ADDCOUNT, REDUCECOUNT } from './actionTypes'

const addCount = (count) => {
    return {
        type: ADDCOUNT,
        // payload: count + 1
    }
}

const reduceCount = (count) => {
    return {
        type: REDUCECOUNT,
        // payload: count - 1
    }
}

export {
    addCount,
    reduceCount
}