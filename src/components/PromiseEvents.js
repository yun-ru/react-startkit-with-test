import React, {Component} from "react";


class PromiseEvents extends Component{

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
            setTimeout(()=>{
                console.log("This is the last one!");
                resolve();
            },1000)
        })
    }

    componentDidMount() {
        this.doFirst()
            .then(this.doSecond)
            .then(this.doLast)
            .then(function(){
                console.log("finished!")
            })
    }
    render() {
        return(
            <div>
                <h1>Promise Events</h1>
            </div>
        )
    }
}

export default PromiseEvents;