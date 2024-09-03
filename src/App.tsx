import { ThemeProvider } from "styled-components";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Home from "pages/home";
import { theme } from "Theme";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          {/* Display while restoring state */}
          <ThemeProvider theme={theme}>
              <Home />
          </ThemeProvider>
          
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App
