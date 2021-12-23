import {combineReducers} from 'redux';

const initialState = [];
const data = (state=initialState, action)=>{        
    if(action.type==="FETCH_REQUEST"){   
        return [...action.payload]
    }else{
        return state
    }
}
export const rootReducer = combineReducers({
    data
})