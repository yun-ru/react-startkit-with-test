import React, {Component} from 'react';

export default (props) =>{
    let arr = [];
    for(let i=0; i<props.times; i++){
        arr.push(props.children);
    }
    return <div> { arr.map(item=>{ return item }) } </div>
};

