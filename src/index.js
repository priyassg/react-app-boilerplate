//Singleton Header Module
const headerSingleton = function(){
    const addHeader = (parentElement) => {
        const headerElement = document.createElement('div');
        headerElement.innerHTML = 'Header Element';
        parentElement.appendChild(headerElement);
    }

    return {
        addHeader
    }
}()

headerSingleton.addHeader(document.querySelector('#header'));

const sections = document.querySelectorAll('#container');



