import { LightningElement, api } from 'lwc';

export default class ActivityTimelineItemDetail extends LightningElement {

    @api fields;
    @api type;
    @api size;
    @api largeDeviceSize;
    @api mediumDeviceSize;
    @api smallDeviceSize;
    @api truncate;

}