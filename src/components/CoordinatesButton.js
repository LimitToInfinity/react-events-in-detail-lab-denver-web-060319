import React, { Component } from "react";

export default class CoordinatesButton extends Component {
    getCoordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
      }
      
    render(){
        return (
            <div className="coordinates-button">
                <button onClick={this.getCoordinates}>Coordinates</button>
            </div>
        );
    }
}
