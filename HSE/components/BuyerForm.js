// const template = document.createElement("template")
const template = document.querySelector("#template-buyer-form")

class ListOrders extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

export default ListOrders
