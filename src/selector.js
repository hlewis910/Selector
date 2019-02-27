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
      return this;
  }
  
  show(){
    this.elements.forEach( (elem) => {elem.style.display = 'inherit'} );
    return this;
  }

  addClassName(className){
    this.elements.forEach( (elem) => {elem.className = className} );
    return this;
 }

 removeClassName(className){
     this.elements.forEach( (elem) => {elem.className = 'none'});
     return this;
 }

 text(mytext){
    this.elements.forEach( (elem) => {elem.innerText = mytext} );
    return this;
 }

 addChild(domType) {
     
     this.elements.forEach( (elem) => {elem.appendChild(document.createElement(domType))});
     return this;
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
    //return this.elements;
    return this;
}



}

