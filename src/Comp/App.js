import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Fetch_article } from '../actions';
import { Pagination } from 'antd';

const App = (props) => {

    useEffect(() => {
        props.Fetch_article(1);
    }, []);
    
    const renderedList = props.article.map((val) => {
        return (<div key={val.nid} style={{ border: '1px solid black', textAlign: 'center', margin: '1px' }}>
            <h3>Title : {val.title} </h3>
            <h5>NID : {val.nid} </h5>
        </div>)
    })

    const onDataChnage = (e) => {
        props.Fetch_article(e);
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1> Pagination </h1>
            {renderedList}
            {props.article.length?
            <Pagination defaultCurrent={1} total={100} onChange={onDataChnage} />:null }
        </div>
    );
}

const mapStateToProp = (state) => {
    return { article: state.data }
}
export default connect(mapStateToProp, { Fetch_article })(App);
