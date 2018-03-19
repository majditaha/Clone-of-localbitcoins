import React from 'react';
import {Button, ListGroup, ListGroupItem, Alert} from 'react-bootstrap';

class AlertDismissable extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            alertVisible: props.alertVisible,
            style: props.style,
            stField: props.stField,
        };
    }
  
    render() {  
      if (this.state.alertVisible) {
        return (
          <Alert bsStyle= {this.state.style} onDismiss={this.handleAlertDismiss.bind(this)}>
          {this.state.stField}
          </Alert>
        );
      }
 
      return (
        <Button onClick={this.handleAlertShow.bind(this)}>Show Alert</Button>
      );	
    }
  
    handleAlertDismiss() {
      this.setState({ alertVisible: false });
    }
  
    handleAlertShow() {
      this.setState({ alertVisible: true });
    }
}

 export default AlertDismissable;