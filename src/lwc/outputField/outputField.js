import { LightningElement, api } from 'lwc';

export default class OutputField extends LightningElement {

    @api field;
    @api truncate = false;

    /******************
     * 
     * Getters
     * 
     *****************/

    get fieldClasses() {
        console.log(`@@@@@ truncate outputField: ${this.truncate}`);
        console.log(`@@@@@ truncate class: ${this.truncate ? 'slds-truncate' : ''}`);
        return this.truncate  ? 'slds-truncate' : '';
    }
}