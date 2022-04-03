export class Section{
    constructor({items, renderer}, sectionSelector){
        this.sectionEl = document.querySelector(sectionSelector);
        this.items = items;
        this.renderer = renderer;
    }

    addItem(addedElement){
        this.sectionEl.prepend(addedElement);
    }

    renderAllElement(){
        this.items.forEach((currentItem) =>{
            this.renderer(currentItem);
        })
    }
}