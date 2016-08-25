import React, {Component} from "react";
import update from 'react-addons-update';


// const ChildEle = props=>{
//     return (
//         <div>
//             <h3>{props.name}</h3>
//             {props.data.map((item,i)=>(
//                 <p key={i}><button onClick={props.handleClick.bind(this,i,props)}>{item}</button></p>
//             ))}
//         </div>
//     )
// }

class ChildEle extends Component {
    state = {
        arr: ["g","a","b"]
    };
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {this.props.fruits.map((item,i)=>(
                    <p key={i}><button onClick={this.props.handleClick.bind(this,i,this.props,this.state)}>{item}</button></p>
                ))}
            </div>
        )
    }
}

const EnList = (props)=>{
    return(
        <div>
            {props.fruits.map((item,i)=><p key={i}>{item}</p>)}
        </div>
    )
};


class Communicate extends Component{
    state = {
        fruits: ["a","b","c"]
    };

    handleClick(i,props,state) {

        this.setState({fruits: update(this.state.fruits,{$splice: [[i,1,props.fruits[i]]] }) });
        // console.log(state);
        // console.log(props.data[i]);
        // console.log(this);
    }

    componentWillUpdate(nextProps,nextState) {
        console.log(this.state);
        console.log(nextState);
    }


    render() {
        return (
            <div>
                <EnList fruits={this.state.fruits}/>
                <ChildEle name="Ruby" fruits={["apple","orange","banana"]} handleClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}


export default Communicate;