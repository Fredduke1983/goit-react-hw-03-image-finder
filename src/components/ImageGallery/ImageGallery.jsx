import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Component } from 'react';
import { Gallery } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    dataPics: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;
    if (searchValue !== prevProps.searchValue && searchValue) {
      console.log('UPDATE FETCH!');
      getFetchPixabay(searchValue).then(response => {
        this.setState({
          dataPics: response.data.hits,
          //   dataPics: [...this.state.dataPics, ...response.data.hits],
        });
      });
    }
  }

  render() {
    return (
      <Gallery>
        {this.state.dataPics.length !== 0 && (
          <ImageGalleryItem dataPics={this.state.dataPics} />
        )}
      </Gallery>
    );
  }
}
