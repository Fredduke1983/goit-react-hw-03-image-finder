import { Component } from 'react';
import { Container } from './app.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchValue: '',
  };

  getSearchValue = searchValue => {
    return this.setState({ searchValue });
  };

  // setPage() {
  //   this.setState({ page: this.state.page + 1 });
  // }

  render() {
    return (
      <Container>
        <SearchBar getSearchValue={this.getSearchValue} />
        <ImageGallery searchValue={this.state.searchValue} />
      </Container>
    );
  }
}
