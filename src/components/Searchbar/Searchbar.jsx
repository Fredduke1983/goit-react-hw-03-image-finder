import { Component } from 'react';
import { SearchBarStyle, SubmitBtn } from './searchBar.styled';

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
      <SearchBarStyle>
        <form className="form" onSubmit={this.onSubmit}>
          <SubmitBtn type="submit">
            <span className="button-label">Search</span>
          </SubmitBtn>
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
      </SearchBarStyle>
    );
  }
}
