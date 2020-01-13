import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  id = 3;

  state = {
    input: '',
    users: [
      {
        id: 1,
        username: 'SpaceChae'
      },
      {
        id: 2,
        username: 'Scuderia'
      }
    ]
  }

  onChange = (e) =>{
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.onButtonClick();
    }
  }
  onButtonClick = (e) => {
    this.setState(({users,input}) => ({
      input: '',
      users: users.concat({
        id: this.id++,
        username: input
      })
    }))
  }

  render() {
    const { onChange, onButtonClick, onKeyPress } = this;
    const { input, users } = this.state;

    return(
      <div>
        <div>
          <input onChange={onChange} value={input} onKeyPress={this.handleKeyPress} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    )
  }
}


export default App;
