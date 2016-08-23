import React, {Component} from "react";


class PromiseEvents extends Component{

    state = {
        name: ""
    };

    doFirst() {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("This is first!");
                resolve("from first!");
            },1000)
        })
    }

    doSecond(msg) {
        console.log("prev func send: " + msg);
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("This is second!");
                resolve("from second!");
            },1000)
        })
    }
    doLast(msg) {
        console.log("prev func send: " + msg);
        return new Promise((resolve,reject)=>{
            this.setState({msg: "hi ruby"});
            setTimeout(()=>{
                console.log("This is the last one!");
                resolve();
            },1000)
        })
    }

    componentDidMount() {
        console.log(this.state);
        this.doFirst()
            .then(this.doSecond)
            .then(this.doLast.bind(this))
            .then(function(){
                this.setState({name: "Ruby"});
                console.log("finished!")
            }.bind(this))
    }
    render() {
        const {name,msg} = this.state;
        return(
            <div>
                <h1>Promise Events</h1>
                {name && <h3>{name}</h3>}
                {msg && <i>{msg}</i>}
            </div>
        )
    }
}

export default PromiseEvents;