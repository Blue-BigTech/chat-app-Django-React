import { RELOAD } from './type'

const initialState = 0


const reloadReducer = (state=initialState, action) => {
    const { type } = action
    switch (type) {
        case RELOAD: 
        return state + 1
        
        default: 
        return state
    }
    
}


export default reloadReducer

