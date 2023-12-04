// src/App.tsx
import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { fetchDataSuccess, FetchDataSuccessAction } from "./redux/actions";
import { AppState } from "./redux/reducers";
import ProductCard from "./components/ProductCard";
import mockApi from "./utils/mockApi";
import { Product, Sales } from "./utils/productData";
import Graph from "./components/Graph";
import Table from "./components/Table";
import { Dispatch } from "redux";
import "./App.css";
import { colors } from "./constants/styles";

type AppProps = PropsFromRedux & {
  // Add any other props your component expects
};

const App: React.FC<AppProps> = ({ productData, fetchDataSuccess }) => {
  const [salesData, setSalesData] = useState<Sales[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await mockApi.fetchProductData();
        fetchDataSuccess(result);
        const extractedSalesData = result.flatMap((product) => product.sales);
        setSalesData(extractedSalesData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [fetchDataSuccess]);

  return (
    <div className="app">
      {/* Header with Stackline logo */}
      <header
        className="app-header"
        style={{ backgroundColor: colors.backgroundBlue }}
      >
        <img
          src="/stackline_logo.svg"
          alt="Stackline Logo"
          className="app-logo"
        />
      </header>

      {/* Main content layout */}
      <div className="main-content">
        {/* Left section with ProductCard */}
        <div
          className="left-section"
          style={{ backgroundColor: colors.backgroundGrey }}
        >
          {productData.map((product, index) => (
            <ProductCard
              key={index}
              product={{
                title: product.title,
                image: product.image,
                subtitle: product.subtitle,
                tags: product.tags,
              }}
            />
          ))}
        </div>

        {/* Right section with Graph and Table */}
        <div
          className="right-section"
          style={{ backgroundColor: colors.backgroundGrey }}
        >
          {/* Graph component */}
          <Graph data={salesData} />

          {/* Table component */}
          <Table salesData={salesData} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  productData: state.data.data,
});

const mapDispatchToProps = (dispatch: Dispatch<FetchDataSuccessAction>) => ({
  fetchDataSuccess: (data: Product[]) => dispatch(fetchDataSuccess(data)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
export default connector(App);
