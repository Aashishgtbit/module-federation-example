import React from 'lib-app/react';
import Button from './src/Button';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
    }; 
  }
  
  render() {
    console.log("Component-App Rendering ...")
    return (
      <div>
        <br />
        <Button />
        <br />        
      </div>
    );
  }
}
