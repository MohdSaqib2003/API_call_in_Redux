### Action Creator

```
import Fetch_data from "../API/Article";

export const Fetch_article = (page)=>async dispatch=>{

        var response = await Fetch_data.get('',{params: {page:page}});
        
        dispatch({type:'FETCH_REQUEST', payload:response.data})
}
```


### Reducers
```

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

```


### Create store
```

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import ReduxThunk from 'redux-thunk';
import App from './Comp/App';
import { rootReducer } from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(ReduxThunk)))

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

```
