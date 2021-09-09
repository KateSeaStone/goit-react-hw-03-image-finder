import React from 'react';
import Spinner from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';


class Loader extends React.Component {
  render() {
    return (
      <div className="loader">

        <Spinner
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={4000} />

      </div>
    )
  }
}



export default Loader;


