import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Component } from 'react';
import { Gallery, LoadMore } from './imageGallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class ImageGallery extends Component {
  state = {
    dataPics: [],
    page: 1,
    isEmptyList: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchValue } = this.props;

    if (searchValue !== prevProps.searchValue && searchValue) {
      this.props.setLoadState(true);

      if (prevState.page !== 1) {
        this.setState({ page: 1 });
      }

      getFetchPixabay(searchValue)
        .then(response => {
          if (response.data.hits.length === 0) {
            return toast('Picture not find');
          }
          this.setState({
            dataPics: response.data.hits,
            page: this.state.page + 1,
            isEmptyList: true,
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

    this.props.setLoadState(true);

    getFetchPixabay(searchValue, page)
      .then(response => {
        if (response.data.hits.length === 0) {
          this.setState({ isEmptyList: false });
          return toast('No more picture');
        }

        this.setState({
          dataPics: [...this.state.dataPics, ...response.data.hits],
          page: this.state.page + 1,
          isEmptyList: true,
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
          {dataPics.length !== 0 && (
            <ImageGalleryItem
              dataPics={dataPics}
              setLargeImg={this.props.setLargeImg}
              setShowModal={this.props.setShowModal}
            />
          )}
        </Gallery>
        {this.state.isEmptyList && (
          <LoadMore onClick={this.onMore}>Load More...</LoadMore>
        )}
        <ToastContainer />
      </>
    );
  }
}
