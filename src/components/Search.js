import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Search extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      keyword: "",
    };
  }

  onChange(e) {
    this.setState({ keyword: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.keyword === "") {
      this.props.setAlert("Please enter a username", "danger");
    }
    this.props.searchUsers(this.state.keyword);
    this.setState({ keyword: "" });
  };

  render() {
    return (
      <div className="container my-3">
        <Form onSubmit={this.onSubmit}>
          <InputGroup>
            <Form.Control value={this.state.keyword} onChange={this.onChange} placeholder="Enter username.." />
            <Button type="submit" variant="btn btn-primary btn-lg">
              Search
            </Button>
          </InputGroup>
        </Form>
        {this.props.showClearButton && (
          <button className="btn btn-secondary btn-sm w-100 mt-3" onClick={this.props.clearUsers}>
            Clear Results
          </button>
        )}
      </div>
    );
  }
}

export default Search;
