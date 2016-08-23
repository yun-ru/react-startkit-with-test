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

    handleClick(i) {
        console.log("You clicked: " + this.props.weeks[i].title);
        this.setState({weeks: this.props.weeks.map((week,index)=>{
            if(index===i){
                week.active = !week.active;
                return week
            }else{
                return week
            }
        })})
    }

    render() {
        const weeks = this.props.weeks;
        return (
            <div>
                <h2>Weeks Buttons</h2>
                <Weeks weeks={weeks}/>
                <Btns weeks={weeks} handleClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}


export default WeekBtns;