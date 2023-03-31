import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Component } from 'react';
import { Gallery, LoadMore } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    dataPics: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;
    if (searchValue !== prevProps.searchValue && searchValue) {
      this.props.setLoadState(true);

      getFetchPixabay(searchValue)
        .then(response => {
          this.setState({
            dataPics: response.data.hits,
            page: this.state.page + 1,
          });
        })
        .finally(
          setTimeout(() => {
            return this.props.setLoadState(false);
          }, 1000)
        );
    }
  }

  onMore = () => {
    const { searchValue } = this.props;
    const { page } = this.state;

    if (!searchValue) {
      return;
    }
    this.props.setLoadState(true);

    getFetchPixabay(searchValue, page)
      .then(response => {
        this.setState({
          dataPics: [...this.state.dataPics, ...response.data.hits],
          page: this.state.page + 1,
        });
      })
      .finally(
        setTimeout(() => {
          return this.props.setLoadState(false);
        }, 1000)
      );
  };

  render() {
    const { dataPics } = this.state;
    return (
      <>
        <Gallery>
          {dataPics.length !== 0 && <ImageGalleryItem dataPics={dataPics} />}
        </Gallery>
        <LoadMore onClick={this.onMore}>Load More...</LoadMore>
      </>
    );
  }
}
