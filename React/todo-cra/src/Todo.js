import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    }
  }
  toggleCompletion(todo) {
    todo.isCompleted = !todo.isCompleted;
    console.log('todo =>', todo);
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { todo } = this.props;
    const { text, isCompleted } = todo;
  //  const checked = this.state.isChecked;
    return (
      <div>
        <input type="checkbox" checked={isCompleted}
        onChange={this.toggleCompletion.bind(this, todo)}></input>
        {text}
      </div>
    );
  }
}

export default Todo;
