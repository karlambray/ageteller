import React from 'react';
import partyPopper from '../assets/party-popper.jpg';

export class AgeStats extends React.Component {
    
    timeSince(date) {
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days / 365);
        days -= years*365;
        let months = Math.floor(years / 31);
        days -= months*31;

        return `${years} years, ${months} months, ${days} days`
    }

    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats on {this.timeSince(this.props.date)}!</h4>
                <img src={partyPopper} alt="party-popper" className="partyPopper" />
            </div>
        )
    }
}