import React from "react";
import CinemasList from "../../components/CinemasList";
import Alert from "../../components/Alert";

import Paginator from "../../components/Paginator";
import { connect } from "react-redux";
import { fetchCinemas } from "../../services/cinemas/actions";

class Cinemas extends React.Component {
  state = { loading: true, error: "" };

  componentDidMount() {
    this.setState({ loading: true, error: "" });
    this.props.fetchCinemas(
      () => {
        this.setState({ loading: false });
      },
      (err) => {
        this.setState({ loading: false, error: err });
      }
    );
  }

  renderLoader = () => {
    return this.state.loading ? (
      <Alert info message="Fetching your data..." />
    ) : null;
  };

  renderError = () => {
    const { loading, error } = this.state;
    return !loading && error ? <Alert danger message={error} /> : null;
  };

  renderResults = () => {
    if (!this.state.loading) {
      return (
        <>
          <CinemasList cinemas={this.props.cinemas} />
          <Paginator />
        </>
      );
    }

    return null;
  };

  render() {
    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">Select a cinema</h2>
          {this.renderError()}
          {this.renderLoader()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ cinemas }) => {
  return { cinemas: cinemas.cinemas };
};

export default connect(mapStateToProps, { fetchCinemas })(Cinemas);
