import Fetch_data from "../API/Article";

export const Fetch_article = (page)=>async dispatch=>{
        var response = await Fetch_data.get('',{params: {page:page}});
        // console.log("inside actions response : ",response);
        dispatch({type:'FETCH_REQUEST', payload:response.data})
}