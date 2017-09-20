import React, { Component } from 'react';

class Cell extends Component {
    render() {
        return (<div id={this.props.id} className={this.props.status? 'cell-active':'cell'} onClick={this.props.onClick}></div>)
    }
}

export default Cell;
