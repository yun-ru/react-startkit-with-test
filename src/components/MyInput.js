import React from 'react';


class MyInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            myText: ""
        }
    }
    componentDidMount() {
        // const el = findDOMNode(this);
    }
    handleChange(e) {
        this.setState({myText: e.target.value})
    }
    handleClick() {
        this.setState({myText: ""},()=>{
            this.refs.myInput.focus();
        })
    }

    render() {
        return (
            <div>
                <h3>The Text: {this.state.myText}</h3>
                <p ref="myGood">good</p>
                <input ref="myInput" value={this.state.myText} onChange={this.handleChange.bind(this)} type="text"/>
                <button onClick={this.handleClick.bind(this)}>Clear it!</button>
            </div>
        )
    }
}


export default MyInput;