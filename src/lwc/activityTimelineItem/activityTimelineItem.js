import { LightningElement, api, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import CURRENT_USER_ID from '@salesforce/user/Id';

// Shared Components
import { Formatter } from 'c/formatter';
import { buildRecordPageRef } from 'c/navigation';

export default class ActivityTimelineItem extends NavigationMixin(LightningElement) {

    @api activityId;
    @api type;
    @api iconName;
    @api title;
    @api whatId;
    @api activityDateTime;
    @api createdById;
    @api createdByName;
    @api itemDetails;
    @api truncateDetails;

    @track activityUrl;
    @track creatorUrl;
    @track showDetails = false;

    /******************
     * 
     * Lifecycle Hooks
     * 
     *****************/

    connectedCallback() {
        // activity url
        this[NavigationMixin.GenerateUrl](
            buildRecordPageRef(this.activityId)
        )
        .then(url => {
            this.activityUrl = url;
        });
        
        // creator url
        this[NavigationMixin.GenerateUrl](
            buildRecordPageRef(this.createdById)
        )
        .then(url => {
            this.creatorUrl = url;
        });
    }

    /******************
     * 
     * Getters
     * 
     *****************/

    /**
     * @description Getter property for returning the url of activity record
     *  
     * @return {string} A url string
     */
    get activityLink() {
        return this.activityUrl;
    }

    /**
     * @description Getter property for returning a formatted date/time string 
     *              from the activity date time property
     * 
     * @return {string} A date/time formatted string
     * 
     * @example 
     *      10:50:36 AM | 9/1/2020
     */
    get timelineDate() {
        const formattedDateTime = Formatter.formatDateTimetoLocale(this.activityDateTime);
        const dateTime = formattedDateTime.split(','),
            date = dateTime[0],
            time = dateTime[1];

        return `${time} | ${date}`;
    }

    /**
     * @description Getter property for returning the button icon for the 
     *              timeline item whenever details are visable
     * 
     * @return {string} slds icon
     */
    get creatorText() {
        return this.isCreatorCurrentUser ? 'You' : this.createdByName;
    }

    /**
     * @description Getter property for returning the url to the user record
     *              of the creator of the activity
     *      
     * @return {string} A url string
     */
    get creatorLink() {
        return this.creatorUrl;
    }

    /**
     * @description Getter property for returning if the creator of the activity
     *              is the current user in context
     * 
     * @return {boolean} True if the current user is the creator, otherwise false
     */
    get isCreatorCurrentUser() {
        return CURRENT_USER_ID == this.createdById;
    }

    /**
     * @description Getter property for returning the activity text for the 
     *              timeline item by type
     * 
     * @return {string} A message string describing the activity
     */
    get activityText() {
        switch (this.type) {
            case 'Email':
                return 'sent an email.';
            case 'List Email':
                return 'sent an email.';
            case 'Task':
                return 'created a task.';
            case 'Call':
                return 'logged a call.';
            case 'Event':
                return 'created an event.';
            default:
                return 'create a task.';
        }
    }

    /**
     * @description Getter property for returning the button icon for the 
     *              timeline item whenever details are visable
     * 
     * @return {string} An slds icon string
     */
    get itemButtonIcon() {
        return this.showDetails ? 'utility:switch' : 'utility:chevronright';
    }

    /**
     * @description Getter property for returning the styling classes for the 
     *              timeline item by type
     * 
     * @return {string} String of slds classes
     */
    get itemClass() {
        switch (this.type) {
            case 'Email':
                return 'slds-timeline__item_expandable slds-timeline__item_email';
            case 'List Email':
                return 'slds-timeline__item_expandable slds-timeline__item_email';
            case 'Task':
                return 'slds-timeline__item_expandable slds-timeline__item_task';
            case 'Call':
                return 'slds-timeline__item_expandable slds-timeline__item_call';
            case 'Event':
                return 'slds-timeline__item_expandable slds-timeline__item_event';
            default:
                return 'slds-icon_container slds-icon-standard-task slds-timeline__icon';

        }
    }

    /**
     * @description Getter property for returning the styling classes for the 
     *              timeline item icon by type
     * 
     * @return {string} String of slds classes
     */
    get iconClass() {
        switch (this.type) {
            case 'Email':
                return 'slds-icon_container slds-icon-standard-email slds-timeline__icon';
            case 'List Email':
                return 'slds-icon_container slds-icon-standard-email slds-timeline__icon';
            case 'Task':
                return 'slds-icon_container slds-icon-standard-task slds-timeline__icon';
            case 'Call':
                return 'slds-icon_container slds-icon-standard-log-a-call slds-timeline__icon';
            case 'Event':
                return 'slds-icon_container slds-icon-standard-event slds-timeline__icon';
            default:
                return 'slds-icon_container slds-icon-standard-task slds-timeline__icon';

        }
    }

    /******************
     * 
     * Click Actions
     * 
     *****************/

    /**
     * @description Click action for toggling the details property
     */
    toggleDetails() {
        this.showDetails = !this.showDetails;
    }
}