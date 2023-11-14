//Singleton Header Module
const headerSingletonModule = function () {
    let count = 0;
    const addHeader = (parentElement) => {
        ++count;
        const headerElement = document.createElement('div');
        headerElement.innerHTML = `Header Element ${count}`;
        parentElement.appendChild(headerElement);
    }

    return {
        addHeader
    }
}()

//Singleton Header Module application
headerSingletonModule.addHeader(document.querySelector('#header'));



const sections = document.querySelectorAll('.section');
sections.forEach((sectionElement) => {
    // sectionModule.addSection(sectionElement)
    headerSingletonModule.addHeader(sectionElement)
})


const sectionModule = function () {
    function Sections(){
        this.count = 0;
        this.innerHTMLText = `Section element ${this.count}`;
    }

    return

}()

/*

    <Section />

    function Section(){
        this.index = 1;

        this.element = document.createElement('div');
        this.element.innerHTML = 'Hello Section ${this.index}'
    }

    Section.prototype.addElement = function(parentElement){
        parentElement.appendChild(this.element);
    }

    const section1 = new Section();
    section1.addElement(parentElement1);

    const section2 = new Section();
    section2.addElement(parentElement2);
*/


/*

    const sectionModule = function(){
    let count = 0;
    function Section(){
        this.index = 1;

        this.element = document.createElement('div');
        this.element.innerHTML = 'Hello Section ${this.index}'
    }

    Section.prototype.addElement = function(parentElement){
        parentElement.appendChild(this.element);
    }

    const createObj = () => {
        returns Object.assign({}, Section)
    }
}()







*/


