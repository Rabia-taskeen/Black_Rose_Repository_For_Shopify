class ProductModel extends HTMLElement{
    constructor(){
        super();
        this.openModelModal();
    }

    getMediaId(){
        const id = this.getAttribute('data-media-id');
        return id;
    }

    getModal(){
        const modal = document.getElementById('productModelModal');
        return modal;
    }

    openModelModal(){
       const mediaID = this.getMediaId();
       const modal = this.getModal();
       if(!mediaID) return;

       const openModalButtom = this.querySelector(`button[id="productModelOpenButton_${mediaID}"]`);

       openModalButtom.addEventListener('click', function(e){
        modal.querySelector("#body").innerHTML = "";

        const template = document.querySelector(`product-model[data-media-id="${mediaID}"]>template`);
        const clone = template.content.cloneNode(true);

        modal.querySelector("#body").appendChild(clone);
        modal.querySelector("#body >  model-viewer").setAttribute("reveal", "auto");
       });
    }
}

const productModel = customElements.define('product-media', ProductModel);