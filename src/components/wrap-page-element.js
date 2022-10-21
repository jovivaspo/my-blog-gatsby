import React from "react";
import App from "./app";

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => <App {...props}>{element}</App>;

export default wrapPageElement;
