import React from 'react';
import { findDOMNode } from 'react-dom';



const UserName = (props)=> {
    return(
        <p>I'm {props.name}, living in {props.city} city.</p>
    )
}


class NoState extends React.Component{

    render() {
        return (
            <div>
                <h3 ref="title">Apple Pei</h3>
                <UserName name="Ruby" city="Taichung" />
            </div>
        )
    }
}


export default NoState;