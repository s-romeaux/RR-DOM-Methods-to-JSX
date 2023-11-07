let koalaContainer = createElement("div", {
  className: "ui items"
}, koalas.map(koala => createElement("div", {
  className: "item",
  style: {
    cursor: 'pointer'
  }
}, createElement("div", {
  className: "image"
}, createElement("img", {
  src: koala.imageURL
})), createElement("div", {
  className: "content"
}, createElement("div", {
  className: "header"
}, koala.name), createElement("div", {
  className: "description"
}, createElement("p", null, koala.description))))));
document.body.append(koalaContainer);