import React from 'react';
var Immutable = require('immutable');
var update = require('react-addons-update');





class User extends React.Component{

    state = {
        num: 10
    };

    handleNumAdd() {
        // this.setState(Immutable.fromJS(this.state).set("num",this.state.num+1).toJS());
        this.setState(update(this.state,{num: {$set: this.state.num+1}}))
    }

    componentWillUpdate(nextProp,nextState) {
        console.log(this.state);
        console.log(nextState);
    }

    render() {

        return (
            <div>
                <h3>{this.state.num}</h3>
                <button onClick={this.handleNumAdd.bind(this)}>add</button>
            </div>
        )
    }
}
export default User;