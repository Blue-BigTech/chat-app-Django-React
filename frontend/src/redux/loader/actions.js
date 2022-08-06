import { SHOW_LOADER, HIDE_LOADER } from './type'

export const showLoader = () =>{
    return {
        type: SHOW_LOADER,
    }
}


export const hideLoader = () =>{
    return {
        type: HIDE_LOADER,
    }
}

