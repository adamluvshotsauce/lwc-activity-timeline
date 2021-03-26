import { LightningElement, api } from 'lwc';

export default class ActivityTimeline extends LightningElement {

    @api title;
    @api activities;
    @api placeholderSvgName
    @api placeholderHeading;
    @api placeholderMessage;
    @api placeholderSize;
    
    /******************
     * 
     * Getters
     * 
     *****************/

    /**
     * @description Getter property for determining if activities has data available
     * @return {boolean} Returns true if there are activities, else false
     */
    get dataAvailable() {
        return Array.isArray(this.activities) && this.activities.length;
    }
}