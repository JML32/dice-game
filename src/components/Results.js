import React, { Component } from 'react'

class Results extends Component {

    render() {

        let { won, loss, draw } = this.props;

        return (
            <React.Fragment>
                <h3 style={{ fontFamily: `Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'` }}>
                    Won:{won}</h3>
                <h3 style={{ fontFamily: `Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'` }}>
                    Loss:{loss}</h3>
                <h3 style={{ fontFamily: `Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif'` }}>
                    Draw:{draw}</h3>
            </React.Fragment>
        )
    }
}

export default Results
