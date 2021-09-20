import React, { Component } from 'react'


class BetterNumerItem extends Component{
    handleRemove = (event) => {
        console.log("INSIDE HANDLE REMOVE")
        this.props.remove(this.props.value)
    }
    render(){
        return(
            <li>
                {this.props.value}
                <button onClick={this.handleRemove}>X</button>
            </li>
        )
    }
}
export default BetterNumerItem