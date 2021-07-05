import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success"/>
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with furthur instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Success