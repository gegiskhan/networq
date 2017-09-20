import React, { Component } from 'react';

class Controller extends Component {
    render() {
        return (
            <div className="animated fadeIn">
                <button onClick={this.props.run}>Run</button>
                <button onClick={this.props.stop}>Pause</button>
                <button onClick={this.props.clear} style={{marginRight: 20}} >Clear</button>
                <span>Generations: {this.props.gen}</span>
            </div>
        );
    }
}

export default Controller;
