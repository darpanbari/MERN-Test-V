import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllCustomers from "./pages/AllCustomers";
import "bootstrap/dist/css/bootstrap.min.css";
import AccountsProducts from "./pages/AccountsProducts";
import TransactionsIds from "./pages/TransactionsIds";
import LoginPage from "./pages/LoginPage";
import GoogleAuth from "./components/Auth/GoogleAuth";

function App() {
  return (
    <div>
      <BrowserRouter>
      <GoogleAuth />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/all-customers" element={<AllCustomers />} />
          <Route path="/get-accounts-products" element={<AccountsProducts />} />
          <Route path="/get-transactions" element={<TransactionsIds />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
