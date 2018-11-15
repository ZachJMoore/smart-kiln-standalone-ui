import React, { Component } from "react"

class Schedules extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return (
            <div className="schedules-container">

                {this.props.schedules.map((schedule, index)=>{
                    return <ScheduleItem schedule={schedule} key={index}/>
                })}

            </div>
        )
    }
}

let ScheduleItem = (props) => (
        <div className="schedule-item">
            <p>{props.schedule.name}</p>
            <table>
                <tbody>
                    <tr>
                        <th>Ramp</th>
                        <th>Rate</th>
                        <th>Target</th>
                        <th>Hold</th>
                    </tr>
                    {props.schedule.ramps.map((ramp, index)=>
                        (<tr key={index}>
                            <td>{index + 1}</td>
                            <td>{ramp.rate}</td>
                            <td>{ramp.target}</td>
                            <td>{ramp.hold}</td>
                        </tr>)
                    )}
                </tbody>

            </table>
        </div>
)

export default Schedules