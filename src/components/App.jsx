import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchValue: '',
    page: 1,
  };

  getSearchValue = searchValue => {
    return this.setState({ searchValue });
  };

  // setPage() {
  //   this.setState({ page: this.state.page + 1 });
  // }

  render() {
    return (
      <>
        <SearchBar getSearchValue={this.getSearchValue} />
        <ImageGallery searchValue={this.state.searchValue} />;
      </>
    );
  }
}
