import React, { Component } from 'react'

class Status extends Component {

    render() {

        let { status } = this.props;

        let status_at_instance = document.getElementById('status');
        if (status === 'Hurray! You won 🎉') {
            status_at_instance.style.backgroundColor = 'green';
        }
        else if (status === 'Ah! You lose 😱') {
            status_at_instance.style.backgroundColor = 'red';
        }
        else if (status === `It's a draw 😑`) {
            status_at_instance.style.backgroundColor = 'blue';
        }

        return (
            <React.Fragment>
                {!status ? <h1 id="status"> </h1> :
                    <h3 id="status" style={{ borderRadius: '10px', padding: '10px' }} >{status}</h3>}
            </React.Fragment>
        )
    }
}

export default Status;
