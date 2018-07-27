class DOMNodeCollection {
  constructor(arr) {
    this.arr = arr;
  }
  
  html(string) {
    if (typeof string !== "string") {
      return this.arr[0].innerHTML;
    } else {
      this.arr.forEach( (el) => el.innerHTML = string );
    }
  }
  
  empty() {
    // this.arr.forEach( (el) => el.innerHTML = "" );
    this.html('');
  }
  
  append(arg) {
    // arg.forEach( (el) => el.outerHTML.append(this.html()) );
    if (arg.constructor.name === 'String') {
      this.arr.forEach( (el) => el.innerHTML += arg );
    } else if (arg instanceof HTMLElement) {
      // this.arr.forEach( (el) => el.innerHTML.add(arg));
      this.arr.forEach((el) => el.appendChild(arg).cloneNode(true));
    } else {
      this.arr.forEach(() => {        
        arg.forEach((el) => el.innerHTML.add(arg));
      } );
    }
  }
  
  attr() {
    return this.arr.map( (el) => el.attributes );
  }
  
  addClass(name) {
    this.arr.map( (el) => el.className = name );
  }
  
  removeClass() {
    this.arr.map( (el) => el.className = "");
  }
  
  children() {
    return this.arr.map( (el) => el.children );
  }
  
  parent() {
    return this.arr.map( (el) => el.parentNode);
  }
}

module.exports = DOMNodeCollection;
