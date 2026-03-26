// const element1 = React.createElement("h1", { id: "banner" }, "Header");
// const element2 = React.createElement("input", { style: { color: "red" } });
// const element3 = React.createElement("h2", {}, "Footer");
// const div = React.createElement("div", {}, element1, element2, element3);

const container1 = React.createElement(
  "div",
  { key: "1" },

  React.createElement("h1", {}, "jCodeCamp"),
  React.createElement(
    "p",
    { key: "2" },
    "freeCodeCamp is a non-profit educational organization that consists of an interactive learning web platform, an online community forum, chat rooms, online publications and local organizations that intend to make learning software development & computer programming accessible to anyone.",
  ),
  React.createElement("h2", {}, "Language We Covered"),
  React.createElement("h3", {}, "Java"),
  React.createElement("h3", {}, "JavaScript"),
  React.createElement("h3", {}, "Python"),
);

const container2 = React.createElement(
  "div",
  {
    key: "3",
  },
  React.createElement(
    "h1",
    {
      style: {
        border: "2px solid",
        display: "inline-grid",
        alignContent: "center",
        alignItems: "center",
        margin: "20px",
        padding: "20px",
      },
    },
    "Contact us: jCodeCamp.com",
  ),
);

const main = React.createElement(
  "div",
  {
    style: {
      border: "2px solid",
      display: "inline-grid",
      alignContent: "center",
      alignItems: "center",
      margin: "20px",
      padding: "20px",
    },
  },
  [container1, container2],
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);

console.log(main);
