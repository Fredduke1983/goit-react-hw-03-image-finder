import { Component } from 'react';
import { Container } from './app.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchBar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchValue: '',
    isLoading: false,
  };

  getSearchValue = searchValue => {
    return this.setState({ searchValue });
  };

  setLoadState = isLoading => {
    this.setState({ isLoading });
    console.log('this.state.isLoading', this.state.isLoading);
  };

  render() {
    return (
      <Container>
        <SearchBar
          getSearchValue={this.getSearchValue}
          isLoading={this.state.isLoading}
        />
        <ImageGallery
          searchValue={this.state.searchValue}
          setLoadState={this.setLoadState}
        />
      </Container>
    );
  }
}
