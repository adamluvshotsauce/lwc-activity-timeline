/******************
 * 
 * Utility Functions
 * 
 *****************/

/**
 * @description Function for bulding a record page object for a given record id
 * 
 * @param {string} recordId sfdc record id string
 * @return {object} Returns a page reference object
 */
const buildRecordPageRef = (recordId) => {
    return {
        type: 'standard__recordPage',
        attributes: {
            recordId: recordId,
            actionName: 'view',
        }
    };
};

/**
 * @description Function for bulding a record page object for a given record id and object api name
 * 
 * @param {string} recordId sfdc record id string
 * @param {string} objectApiName sfdc object api name string
 * @return {object} Returns a page reference object
 */
const buildNavigationRecordPageRef = (recordId, objectApiName) => {
    return {
        type: 'standard__recordPage',
        attributes: {
            recordId: recordId,
            objectApiName: objectApiName,
            actionName: 'view',
        }
    };
};

/**
 * @description Function for bulding a relative record page url for a given record id
 * 
 * @param {string} recordId sfdc record id string
 * @return {object} Returns a sURL string
 */
const buildRecordViewLink = (recordId) => {
    return `/lightning/r/${recordId}/view`;
};

export { buildRecordPageRef, buildNavigationRecordPageRef, buildRecordViewLink }