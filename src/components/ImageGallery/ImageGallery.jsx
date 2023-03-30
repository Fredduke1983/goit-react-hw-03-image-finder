import { getFetchPixabay } from 'components/GetFetchPixabay/getFetchPixabay';
import { Component } from 'react';

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
      <ul className="gallery">
        IE
        {this.state.dataPics.length && (
          <img src={this.state.dataPics[0].previewURL}></img>
        )}
      </ul>
    );
  }
}
