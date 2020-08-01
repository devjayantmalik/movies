import React from "react";
import Alert from "../../components/Alert";
import ProductionsList from "../../components/ProductionsList";
import Paginator from "../../components/Paginator";

import { connect } from "react-redux";
import { fetchProducers } from "../../services/producers/actions";

class Productions extends React.Component {
  state = { loading: true, error: "" };

  componentDidMount() {
    this.props.fetchProducers(
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
          <ProductionsList productions={this.props.productions} />
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
          <h2 className="heading">Select a production</h2>
          {this.renderError()}
          {this.renderLoader()}
          {this.renderResults()}
        </section>
      </main>
    );
  }
}

const mapStateToProps = ({ producers }) => {
  return { productions: producers.producers };
};

export default connect(mapStateToProps, { fetchProducers })(Productions);
