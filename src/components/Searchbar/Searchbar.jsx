import { Component } from 'react';
import axios from 'axios';

export class SearchBar extends Component {
  state = {
    value: '',
  };

  async pixa(searchValue) {
    console.log(`${searchValue}`);
    const response = await axios.get(
      `https://pixabay.com/api/?q=${searchValue}&page=1&key=33584211-0b8ad53b88131ae018d3e6558&image_type=photo&orientation=horizontal&per_page=12`
    );
  }

  onSubmit = event => {
    event.preventDefault();
    this.pixa(this.state.value);
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
