import React, { Component } from 'react';

class Settings extends Component {
    render() {
        return (
            <div>
                <span>Board size:</span><button id='small' onClick={this.props.changeSize}>30x50</button>
                <span style={{ marginLeft: 15 }}>Sim speed:</span><button onClick={this.props.changeSpeed}>Fast</button>
            </div>
        )
    }
}

export default Settings;
