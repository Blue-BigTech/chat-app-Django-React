import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import alertReducer from './alert/reducer'
import loaderReducer from './loader/reducre'
import reloadReducer from './reload/reducre'



const rootReducer = combineReducers({
    auth: authReducer,
    alerts : alertReducer,
    loader: loaderReducer,
    reload: reloadReducer,
})


export default rootReducer