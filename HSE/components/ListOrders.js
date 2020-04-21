const template = document.querySelector("#template-list-orders")
const templateItem = document.querySelector("#template-item-list-orders")

class ListOrders extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    // this.shadowRoot.appendChild(document.createElement("div"))
  }

  async connectedCallback() {
    const response = await fetch("./orders.json")
    const listFromServer = await response.json()

    listFromServer.forEach((element) => {
      this.shadowRoot.appendChild(templateItem.content.cloneNode(true))
    })
  }
}

export default ListOrders
