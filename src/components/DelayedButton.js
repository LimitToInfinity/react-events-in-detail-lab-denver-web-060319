import React, { Component } from "react";

export default class DelayedButton extends Component {
    
    delayedResponse = (event) => {
        event.persist();
        setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
        return (
            <div className="delayed-button">
                <button onClick={this.delayedResponse}>Delayed</button>
            </div>
        );
    }
}
