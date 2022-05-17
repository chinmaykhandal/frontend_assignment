import Header from "./Components/Header";
import Form from "./Components/Form";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FormData from "./Components/FormData";
function App() {
  return (
      <>
      <Header />
      <Form />
      <BrowserRouter>
    <Routes>
      <Route path="/v1jobs/job" element={<FormData />} />
    </Routes>
    </BrowserRouter>
      </>
  );
}

export default App;
