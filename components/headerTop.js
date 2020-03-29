const template = document.createElement("template")
template.innerHTML = `
  <style>
    header {
      background-color: mintcream;
      padding: 20px 30px;
      width: 100%;
      color: #444;
      box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.75);
      display: flex;
      justify-content: space-around;
      border-radius: 5px;
    }

    header div.item {
      cursor: pointer;
      letter-spacing: 1px;

    }
    header div.item:hover,
    header div.item.selected {
      font-weight: bold;
      font-size: 97%;
    }
  </style>

  <header>
    <div class="item selected" id="item1"> Página Inicial </div>
    <div class="item" id="item2"> Onde Estudei </div>
    <div class="item" id="item3"> Projetos </div>
    <div class="item" id="item4"> Stacks Favoritas </div>
    <div class="item" id="item5"> Just for Fun </div>
  </header>
`
class Header extends HTMLElement {
  constructor() {
    super()

    this.attachShadow({ mode: "open" })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    this.selectedItem = this.shadowRoot.querySelector(`#item1`)
  }

  clickedItem(item) {
    const oldItem = this.selectedItem
    this.selectedItem = item

    oldItem.classList.remove("selected")
    this.selectedItem.classList.add("selected")
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll("div.item").forEach(item => {
      item.addEventListener("click", item => this.clickedItem(item.path[0]))
    })
  }

  disconnectedCallback() {
    this.shadowRoot.querySelectorAll("div.item").forEach(item => {
      item.removeEventListener()
    })
  }
}
export default Header
