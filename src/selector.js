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
  hide (){
      this.elements.forEach( (elem) => {elem.style.display = 'none'} );
  }
  
  show(){
    this.elements.forEach( (elem) => {elem.style.display = 'inherit'} );
  }

  addClassName(className){
    this.elements.forEach( (elem) => {elem.className = className} );
 }

 removeClassName(className){
     this.elements.forEach( (elem) => {elem.className = 'none'});
 }

 text(mytext){
    this.elements.forEach( (elem) => {elem.innerText = mytext} );
 }

 addChild(domType) {
     
     this.elements.forEach( (elem) => {elem.appendChild(document.createElement(domType))});
 }

 blink(interval){
    setInterval( () => {
        this.elements.forEach( (elem) => {
            if (elem.style.display==="none"){
                elem.style.display = "inherit"
            } else {
                elem.style.display = 'none';
            }
        })
    }
    ,interval
    )
    
}

}

