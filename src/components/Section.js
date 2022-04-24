export class Section{
    constructor({renderer}, sectionSelector){
        this.sectionEl = document.querySelector(sectionSelector);
        this.renderer = renderer;
    }

    addItem(addedElement){
        this.sectionEl.prepend(addedElement);
    }

    renderAllElement(itemsDate){
        itemsDate.forEach((currentItem) =>{
            this.renderer(currentItem);
        })
    }
}