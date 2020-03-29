const hugo = (a, b, c) => {
  return "good bye"
}

import HelloService from "./HelloService.js"

class CodeOne extends HTMLElement {
  constructor() {
    super()
    this._answer = 42
    this.hello = new HelloService()
    console.log(this.hello.hello())
  }

  connectedCallback() {
    this.fetchFromServer()
    this.innerHTML = hugo`
      <h2> Hello CodeOne ${this._answer} ${this.getAttribute("message")}</h2>
    `
  }

  async fetchFromServer() {
    const response = await fetch("message.json")
    const json = await response.json()
    // const { hello } = json
    console.log(json)
  }

  set answer(a) {
    this._answer = a
  }
  get answer() {
    return this._answer
  }
}

window.customElements.define("code-one", CodeOne)
