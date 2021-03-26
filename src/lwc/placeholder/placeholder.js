// create an html file for any svg you would like to use
// import it here to make it available for use
// remember to replace the Lorem text with the {message} prop
// link to sfdc docs: https://lightningdesignsystem.com/components/illustration/

import { LightningElement, api } from 'lwc';

// svg imports
import svgShowEmpty from './svgShowEmpty.html';
import svgGoneFishing from './svgGoneFishing.html';
import svgDesert from './svgDesert.html';
import svgCamping from './svgCamping.html';
import svgFishingDeals from './svgFishingDeals.html';
import svgPageNotAvailable from './svgPageNotAvailable.html';

export default class Placeholder extends LightningElement {

    @api svgname;
    @api heading;
    @api message;
    @api size;

    illustrationClassNames = 'slds-illustration ';

    get illustrationClasses() {

        this.illustrationSizes[this.size] ?
            this.illustrationClassNames += this.illustrationSizes[this.size] :
            this.illustrationClassNames += this.illustrationSizes['small'];

        return this.illustrationClassNames;
    }

    // mapping from input param to template
    renderHtml = {
        'showempty': svgShowEmpty,
        'gonefishing': svgGoneFishing,
        'desert': svgDesert,
        'camping': svgCamping,
        'fishingDeals': svgFishingDeals,
        'pageNotAvailable': svgPageNotAvailable,
    };

    // mapping from size input attribute to slds class name
    illustrationSizes = {
        'small': 'slds-illustration_small',
        'large': 'slds-illustration_large',
    }


    render() {
        return this.renderHtml[this.svgname] ? 
            this.renderHtml[this.svgname] : 
            svgShowEmpty;
    }
}