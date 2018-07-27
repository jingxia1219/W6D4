const DOMNodeCollection = require('./dom_node_collection.js');

Window.prototype.$l = function(selector){
  let tag;
  if(selector.constructor.name === 'String'){
    tag = document.querySelectorAll(selector); 
    
  } else if ( selector instanceof HTMLElement) {
    tag = document.querySelectorAll(`${selector}`);
  }
  let arr = Array.from(tag);
  let domNode = new DOMNodeCollection(arr);
  return domNode;
};



