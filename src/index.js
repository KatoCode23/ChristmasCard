import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './Styles';


class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sender: '',
      receiver: '',
      readyToRender: false
    };

    this.onChangeSender = this.onChangeSender.bind(this);
    this.onChangeReceiver = this.onChangeReceiver.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }
  onChangeSender(event) {
    this.setState({sender: event.target.value});
  }
  onChangeReceiver(event) {
    this.setState({receiver: event.target.value});
  }
  onSubmitForm(e) {
    e.preventDefault();
    if(this.state.receiver === '' || this.state.sender === '') {
       this.setState({ readyToRender: false });
    }else{
      this.setState({ readyToRender: true });
    }
  }

  render() {

      let finalResult = null;
      if (this.state.readyToRender) {
        finalResult = <Card sender={this.state.sender} receiver={this.state.receiver} />
    }
    return (
      <form onSubmit={this.onSubmitForm}>
        <div>
          <label>From:</label>
          <input type="text" value={this.state.sender} onChange={this.onChangeSender} />
        </div>

        <div>
          <label>To:</label>
          <input type="text" value={this.state.receiver} onChange={this.onChangeReceiver} />
        </div>

        <input type="submit" />

        {finalResult}

      </form>
     );
   }
  }


ReactDOM.render(
  <Greeting />,
  document.getElementById('root')
);
