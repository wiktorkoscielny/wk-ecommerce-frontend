/*
 * @category  wk-ecommerce
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from 'react-redux';
import { store } from "./wkecommerce/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
