import React from 'react';
import '../../components/App/App.css';
import PageProducts from "../../components/pages/PageProducts/PageProducts";
import MainLayout from "../../components/MainLayout/MainLayout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageProductForm from "../../components/pages/PageProductForm/PageProductForm";
import PageCart from "../../components/pages/PageCart/PageCart";
import PageOrders from "../../components/pages/PageOrders/PageOrders";
import PageOrder from "../../components/pages/PageOrder/PageOrder";
import PageProductImport from "../../components/pages/admin/PageProductImport/PageProductImport";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route  path="/">
              <PageProducts/>
            </Route>
            <Route path={["/admin/product-form/:id", "/admin/product-form"]}>
              <PageProductForm/>
            </Route>
            <Route  path="/cart">
              <PageCart />
            </Route>
            <Route  path="/admin/orders">
              <PageOrders />
            </Route>
            <Route  path="/admin/order/:id">
              <PageOrder />
            </Route>
            <Route  path="/admin/products">
              <PageProductImport />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
