class $ {
    constructor(selector) {
        if (selector.startsWith('.')) {
            const className = selector.split('').slice(1).join('')
            this.elements = Array.from(document.getElementsByClassName(className))
        } else if (selector.startsWith('#')) {
            const idName = selector.split('').slice(1).join('')
            //console.log(idName)
            this.elements = [document.getElementById(idName)]
            //console.log(Array.isArray(this.elements), this.elements.length)
            //console.log(this.elements)
        } else {
            this.elements = Array.from(document.getElementsByTagName(selector))
        }
  }
  //hide()
  //show()
}

