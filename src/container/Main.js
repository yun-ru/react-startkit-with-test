import React, {Component} from 'react';

import WeekBtns from '../components/WeekBtns';

const RepeatEle = props =>{
    let arr = [];
    for(let i=0; i<props.times; i++){
        arr.push(props.children);
    }
    return <div> { arr.map(item=>{ return item }) } </div>
};



class Main extends Component{
    constructor(props) {
        super(props);
        this.weeks = [];
        this.state = {
            weeks: [
                {title: "Mon", active: false, times: [
                    {title: "Time1", active: false},
                    {title: "Time2", active: false},
                    {title: "Time3", active: false},
                    {title: "Time4", active: false},
                    {title: "Time5", active: false},
                    {title: "Time6", active: false,times: [
                        {title: "Time6-1", active: false},
                        {title: "Time6-2", active: false,times: [
                            {title: "Time6-2-1", active: false},
                            {title: "Time6-2-2", active: false},
                            {title: "Time6-2-3", active: false}
                        ]},
                        {title: "Time6-3", active: false}
                    ]},
                ]},
                {title: "Tue", active: false},
                {title: "Wed", active: false},
                {title: "Thu", active: false},
                {title: "Fri", active: false},
                {title: "Sat", active: false},
                {title: "Sun", active: false},
            ]
        }
    }

    checkArrSub(arr){
        arr.forEach(item=>{
            this.weeks.push(item);
            if(item.hasOwnProperty("times")){
                this.checkArrSub(item.times)
            }
        })
    }

    render() {

        this.checkArrSub(this.state.weeks);

        return (
            <div>
                <h1>Main</h1>

                <RepeatEle times="3"><p>hi ruby</p></RepeatEle>

                <WeekBtns weeks={this.weeks}/>

            </div>
        )
    }
}

export default Main;
