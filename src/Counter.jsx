// vendor imports
import React, { Component } from "react";
// style imports
import "./Counter.css";

class Counter extends Component {
  state = {
    counterValue: 0,
    tags: [],
  };
  ref = React.createRef();

  incrementCounterValue = () => {
    this.setState({ counterValue: this.state.counterValue + 1 });
  };

  resetCounterValue = () => {
    if (this.state.counterValue > 0) {
      this.setState({ counterValue: 0 });
    }
  };

  getIncrementButtonStyles = () => {
    if (this.state.counterValue === 0) {
      return "incrementRed";
    }
    return "incrementGreen";
  };

  renderList = () => {
    if (this.state.tags.length === 0) {
      return (
        <div>
          There are no tags to display. Please add few tags to see them on
          screen
        </div>
      );
    }

    return (
      <ul>
        {this.state.tags.map((tag, i) => (
          <li key={i}> {tag} </li>
        ))}
      </ul>
    );
  };

  handleAddTag = () => {
    const newTag = this.ref.current.value;
    if (newTag === "") {
      alert("Tag must have a name");
      return;
    }
    this.setState({ tags: [...this.state.tags, newTag] });
    this.ref.current.value = "";
  };

  handleClearAllTags = () => {
    if (this.state.tags.length > 0) {
      this.setState({ tags: [] });
    } else {
      alert("No tags to clear");
    }
  };

  handleDeleteTagByName = () => {
    const inputValue = this.ref.current.value;
    if (inputValue !== "") {
      if (this.state.tags.includes(inputValue)) {
        const res = this.state.tags.filter((tag) => tag !== inputValue);
        this.setState({ tags: res });
      } else {
        alert("Tag does not  exist");
      }
    } else {
      alert("Tag Name cannot be blank");
    }
    this.ref.current.value = "";
  };

  render() {
    return (
      <div className="border">
        <div> Hello there :) </div>
        <button
          className={this.getIncrementButtonStyles()}
          onClick={this.incrementCounterValue}
        >
          Increment
        </button>{" "}
        <button onClick={this.resetCounterValue}> Reset Counter </button>
        <div>Current Counter Value is {this.state.counterValue}</div>
        <h4> Rendering the Lists</h4>
        <label> Enter Tag</label>
        <label>
          <input type="text" ref={this.ref} />{" "}
          <button onClick={this.handleAddTag}> Add Tag </button>{" "}
          <button onClick={this.handleDeleteTagByName}> Delete Tag </button>{" "}
          <button onClick={this.handleClearAllTags}> Clear All Tags </button>
        </label>
        {this.renderList()}
      </div>
    );
  }
}

export default Counter;
