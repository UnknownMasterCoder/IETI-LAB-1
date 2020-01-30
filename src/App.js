import React from 'react';
import logo from './logo.svg';
import './App.css';
//import {NumberList} from './TodoList';
import {ListItem} from './TodoList';


function App() {
    const todos = [{text:"Find a Work", priority:5, dueDate: new Date(2020,2,15) },
      {text:"Get new customers", priority:5, dueDate: new Date(2020,3,1) },
      {text:"Learn React", priority:5, dueDate: new Date() },
      {text:"Learn about APIs", priority:4, dueDate: new Date(2020,1,23) },
      {text:"write TODO App", priority:3, dueDate: new Date(2020,1,30) }];

  return (
    <TodoList todoList = {todos}/>
  );
}



class TodoApp extends React.Component {
  constructor(props) {

    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (

      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>

          <label htmlFor="new-todo">
            What needs to be done?
          </label>

          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />

          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>

    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    const newItem = {
      text: this.state.text,
      id: Date.now()
    };

    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          &lt;h1&gt;TODO React App&lt;/h1&gt;
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
