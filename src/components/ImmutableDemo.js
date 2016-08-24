import React from 'react';
var Immutable = require('immutable');

class User extends React.Component{

    state = {
        num: 10
    }

    handleNumAdd() {
        var state =Immutable.fromJS(this.state);

        this.setState(state.set("num",this.state.num+1).toJS());
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