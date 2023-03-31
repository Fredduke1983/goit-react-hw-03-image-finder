import { Component } from 'react';
import {
  SearchBarStyle,
  SearchForm,
  SearchInput,
  SubmitBtn,
} from './searchBar.styled';
import { FiSearch } from 'react-icons/fi';

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
        <SearchForm onSubmit={this.onSubmit}>
          <SubmitBtn type="submit">
            <span className="button-label">
              <FiSearch />
            </span>
          </SubmitBtn>
          <SearchInput
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.value}
          />
        </SearchForm>
      </SearchBarStyle>
    );
  }
}
