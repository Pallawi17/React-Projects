const headind1 = React.createElement("h1", {}, "Namaste react");
const headind2 = React.createElement("h2", {}, "This is first page!");
const container = React.createElement("div", {}, [headind1, headind2])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);