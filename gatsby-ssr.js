const React = require("react");
const CustomLayout = require("./src/components/wrap-page-element");

const MagicScriptTag = () => {
  const codeToRunOnClient = `
function getInitialColorMode(){
 
  const colorPreference = window.localStorage.getItem("color-theme");

  if (colorPreference) {
    return colorPreference;
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  if (mql) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
};

const colorMode = getInitialColorMode()


const root = document.documentElement

if(colorMode === "dark"){
  root.classList="dark"
}

  `;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />);
};

exports.wrapPageElement = CustomLayout;
