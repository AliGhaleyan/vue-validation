export default class VueHtmlValidation {

    constructor(element) {
        this.input_element = element;
        this.message_element = VueHtmlValidation.createMessageElement();
        this.input_element.parentNode.insertBefore(this.message_element,this.input_element.nextSibling);
    }

    static createMessageElement() {
        let div = VueHtmlValidation.createDivElement();
        div.setAttribute("class","text-danger text-right small mr-2 mt-2 error-me");
        return div;
    }

    static createDivElement() {
        return document.createElement('div');
    }

    showError(errors) {
        this.input_element.classList.add('is-valid');
        this.message_element.innerText = errors.errors[0];
    }

    clearError() {
        this.input_element.classList.remove('is-valid');
        this.message_element.innerText = '';
    }

    checkError(result) {
        if (result.fails)
            this.showError(result.errors);
        else
            this.clearError();
    }
}