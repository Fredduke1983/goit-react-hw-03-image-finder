import { Component } from 'react';

export class SearchBar extends Component {
  state = {
    value: '',
    page: 1,
  };

  resetForm() {
    this.setState({
      value: '',
    });
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.getSearchValue(this.state.value, this.state.page);
    this.resetForm();
  };

  onChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.onSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            className="input"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </form>
      </header>
    );
  }
}
