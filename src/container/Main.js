import React, {Component} from 'react';

import Users from '../components/Users';

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

    checkArrSub(arr,level){
        arr.forEach(item=>{
            item.level = level;
            this.weeks.push(item);
            if(item.hasOwnProperty("times")){
                this.checkArrSub(item.times,level+1)
            }
        })
    }

    render() {

        this.checkArrSub(this.state.weeks,0);

        return (
            <div>
                <h1>Main</h1>
                <Users/>
            </div>
        )
    }
}

export default Main;
