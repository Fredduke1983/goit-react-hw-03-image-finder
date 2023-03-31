import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Loader } from 'components/Loader/Loader';
import { Component } from 'react';
import { Gallery, LoadMore } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    dataPics: [],
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;
    if (searchValue !== prevProps.searchValue && searchValue) {
      this.setState({ loading: true });

      getFetchPixabay(searchValue)
        .then(response => {
          this.setState({
            dataPics: response.data.hits,
            page: this.state.page + 1,
          });
        })
        .finally(setTimeout(() => this.setState({ loading: false }), 1000));
    }
  }

  onMore = () => {
    const { searchValue } = this.props;
    const { page } = this.state;

    if (!searchValue) {
      return;
    }
    this.setState({ loading: true });

    getFetchPixabay(searchValue, page)
      .then(response => {
        this.setState({
          dataPics: [...this.state.dataPics, ...response.data.hits],
          page: this.state.page + 1,
        });
      })
      .finally(
        setTimeout(() => {
          return this.setState({ loading: false });
        }, 1000)
      );
  };

  render() {
    const { loading, dataPics } = this.state;
    return (
      <>
        <Gallery>
          {loading && <Loader />}
          {dataPics.length !== 0 && <ImageGalleryItem dataPics={dataPics} />}
        </Gallery>
        <LoadMore onClick={this.onMore}>Load More...</LoadMore>
      </>
    );
  }
}
