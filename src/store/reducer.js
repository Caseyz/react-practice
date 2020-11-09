import { combineReducers } from 'redux'

import btnReducer from '../pages/btn/store/reducer'
import showReducer from '../pages/show/store/reducer'

const reducer = combineReducers({
    btnReducer,
    showReducer,
})

export default reducer