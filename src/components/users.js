import React from 'react';
import {findDOMNode} from 'react-dom';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var update = require('react-addons-update');




class User extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            users: ['Ruby','Daniel','Bill']
        }
    }
    handleRemove(i) {
        // this.setState(update(this.state.users[i]))
        // this.setState(update(this.state, {users: {$splice: [[i, 1]]}}));
        this.setState({users: update(this.state.users,{$splice:[[i,1]]})});
        // this.setState({users: this.state.users.filter((user,index)=>index!==i)});
        // this.forceUpdate();
    }
    handleCreate() {
        this.setState({users: this.state.users.concat([this.refs.user.value])});
        this.refs.user.value = "";
        this.forceUpdate();
    }
    handleKeyDown(e) {
        e.keyCode === 13 && this.handleCreate()
    }

    handleUpdate() {
        this.forceUpdate(()=>{
            console.log("updated!")
        });
    }

    render() {

        var users = this.state.users.map((item,i)=>{
            return (
                <h3 key={i}>{item} <button onClick={this.handleRemove.bind(this,i)}>delete</button></h3>
            )
        });
        return (
            <div>
                <button onClick={this.handleUpdate.bind(this)}>update</button>
                <input ref="user" type="text" onKeyDown={this.handleKeyDown.bind(this)}/>
                <button onClick={this.handleCreate.bind(this)}>create!</button>
                <ReactCSSTransitionGroup transitionName="user" transitionEnterTimeout={200} transitionLeaveTimeout={100}>
                    {users}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}
export default User;
