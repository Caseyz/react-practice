import getResult from '../../../mock/index'
import { ADDCOUNT, REDUCECOUNT, ISFIVE } from './actionTypes'

// 增加
const addCount = (count) => {
    return {
        type: ADDCOUNT,
        // payload: count + 1
    }
}

// 减小
const reduceCount = (count) => {
    return {
        type: REDUCECOUNT,
        // payload: count - 1
    }
}

// 是否为5
const isFive = (result) => {
    return {
        type: ISFIVE,
        payload: result
    }
}

const toVerification = count => dispatch => (
    getResult(count).then(res => dispatch(isFive(res.data)))
)



export {
    addCount,
    reduceCount,
    toVerification
}