var createElement = React.createElement("h1", { id: "heading", data: "xyz" }, "Hello World from React");
var rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(createElement);