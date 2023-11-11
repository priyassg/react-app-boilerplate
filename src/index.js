const bodyElement = document.querySelector('body');

/* Creating a module created using iife
This is an ananymous function that adds a header element to a given parent Element
Adavntages of IIFE
- wraps the implementation details inside the IIFE
- There is no leakage of information in the global scope
- Exposes a clean interface
- Singleton pattern where the function will be executed only once
*/
(function(parentElement){
    const headerElement = document.createElement('div');
    headerElement.innerHTML = 'Header Element' ;
    parentElement.appendChild(headerElement);
})(bodyElement)
