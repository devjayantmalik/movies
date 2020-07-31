import React from "react";
import ProductionList from "../../components/ProductionList";
import fakeData from "../../api";
import Paginator from "../../components/Paginator";

class Productions extends React.Component {
  state = { loading: true };

  componentDidMount() {}

  render() {
    return (
      <main className="container-fluid pt-3">
        <section>
          <h2 className="heading">Production Videos</h2>
          <ProductionList productions={fakeData} />
          <Paginator />
        </section>
      </main>
    );
  }
}

export default Productions;
