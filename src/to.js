import React from "react";

class To extends React.Component {
  constructor() {
    super();

    this.state = {
      task: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({
      task: value,
    });
  }

  addItem() {
    if (this.state.task !== "") {
      const task = {
        value: this.state.task,
      };

      const list = [...this.state.list];
      list.push(task);

      this.setState({
        list,
        task: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    list.splice(key, 1);
    this.setState({
      list: list,
    });
  }
  render() {
    return (
      <>
        <div>
          <div>
            <h1>To-Do List</h1>
            <input
              type="text"
              name="task"
              value={this.state.task}
              onChange={(item) => this.updateInput(item.target.value)}
            />

            <button onClick={() => this.addItem()}>Add Task</button>
          </div>
          <div>
            <div>
              {this.state.list.map((item, index) => {
                return (
                  <div>
                    {item.value}
                    <button onClick={() => this.deleteItem(index)}>done</button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export  default To;