import React from 'react';


class MyInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            myText: "",
            winW: window.innerWidth
        }
    }
    componentDidMount() {
        // const el = findDOMNode(this);
        window.addEventListener("resize",this.handleResize.bind(this))
    }
    componentWillUnmount() {
        window.removeEventListener("resize",this.handleResize.bind(this))
    }
    handleChange(e) {
        this.setState({myText: e.target.value})
    }
    handleResize(){
        this.setState({winW: window.innerWidth});
    }
    handleClick(e) {
        const id = e.target.getAttribute("data-id");
        console.log(id);
        this.setState({myText: ""},()=>{
            this.refs.myInput.focus();
        })
    }

    render() {
        return (
            <div>
                <h3>The Text: {this.state.myText}</h3>
                <p>Window width: {this.state.winW}</p>
                <input ref="myInput" value={this.state.myText} onChange={this.handleChange.bind(this)} type="text"/>
                <button onClick={this.handleClick.bind(this)} data-id="1">Clear it!</button>
            </div>
        )
    }
}


export default MyInput;