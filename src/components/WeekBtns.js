import React from 'react';
import RepeatEle from './utils/RepeatEle';

const Btns = props =>(
    <ul>
        {
            props.weeks.map((week,index)=>{
                return (
                    <li key={index}>
                        <RepeatEle times={week.level}> --> </RepeatEle>
                        {week.title},{week.level}
                        <button onClick={props.handleClick.bind(this,index)}>{week.active? "Active": "UnActive"}</button>
                    </li>
                )
            })
        }
    </ul>
);


class WeekBtns extends React.Component{

    handleClick(i) {
        this.clickedItem = this.props.weeks[i].title;
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
                <p>You just clicked: <i>{this.clickedItem? this.clickedItem : null}</i></p>
                <Btns weeks={weeks} handleClick={this.handleClick.bind(this)} />
            </div>
        )
    }
}


export default WeekBtns;