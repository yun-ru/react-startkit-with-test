import React from 'react';


const Btns = props =>(
    <ul>
        {
            props.weeks.map((week,index)=>{
                return (
                    <li key={index}>
                        {week.title}
                        <button onClick={props.handleClick.bind(this,index)}>{week.active? "Active": "UnActive"}</button>
                    </li>
                )
            })
        }
    </ul>
);

const Weeks = props=> <div>{props.weeks.map((w,i)=><p key={i}>{w.title},{w.active+""}</p>)}</div>;



class WeekBtns extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weeks: [
                {title: "Mon", active: false},
                {title: "Tue", active: false},
                {title: "Wed", active: false},
                {title: "Thu", active: false},
                {title: "Fri", active: false},
                {title: "Sat", active: false},
                {title: "Sun", active: false},
            ]
        }
    }

    handleClick(i) {
        console.log("You clicked: " + this.state.weeks[i].title);
        this.setState({weeks: this.state.weeks.map((week,index)=>{
            if(index===i){
                week.active = !week.active;
                return week
            }else{
                return week
            }
        })})
    }

    render() {
        return (
            <div>
                <h2>Weeks Buttons</h2>
                <Weeks weeks={this.state.weeks}/>
                <Btns weeks={this.state.weeks} handleClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}


export default WeekBtns;