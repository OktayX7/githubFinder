import React, { Component, Fragment } from "react";
import Users from "./components/Users";
import Search from "./components/Search";
import Alert from "./components/Alert";
import axios from "axios";
import Navbar from "./components/Navbar";
class App extends Component {
  constructor(props) {
    super(props);
    this.searchUsers = this.searchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.setAlert = this.setAlert.bind(this);
    this.state = {
      loading: false,
      users: [],
      alert: null,
    };
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true });

    if (keyword === "") {
      this.setState({ loading: false });
      return;
    } else {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then((res) => {
          this.setState({ users: res.data.items, loading: false });
        })
        .catch((err) => console.log(err));
    }
  };

  clearUsers = () => {
    this.setState({ users: [] });
  };

  setAlert = (message, type) => {
    this.setState({ alert: { message: message, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 2000);
  };
  render() {
    return (
      <>
        <Navbar />
        <Alert alert={this.state.alert} />
        <Search
          searchUsers={this.searchUsers}
          clearUsers={this.clearUsers}
          showClearButton={this.state.users.length > 0 ? true : false}
          setAlert={this.setAlert}
        />

        <Users users={this.state.users} loading={this.state.loading} />
      </>
    );
  }
}

export default App;
