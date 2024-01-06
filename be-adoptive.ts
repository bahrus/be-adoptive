import {BE, propDefaults, propInfo} from 'be-enhanced/BE.js';
import {BEConfig, EnhancementInfo} from 'be-enhanced/types';
import {XE} from 'xtal-element/XE.js';
import {Actions, AllProps, AP, PAP, ProPAP, POA} from './types';

export class BeAdoptive extends BE<AP, Actions, HTMLStyleElement> implements Actions{
    static  override get beConfig(){
        return {
            parse: false,
            //primaryProp: 'to'
        } as BEConfig
    }

    override async attach(enhancedElement: HTMLStyleElement, enhancementInfo: EnhancementInfo): Promise<void> {
        await super.attach(enhancedElement, enhancementInfo);
        const targetRN = enhancedElement.getRootNode();
        const host = (<any>targetRN).host;
        if(host === undefined) return;
        const rn = host.getRootNode();
        const stylesheets = rn.styleSheets;
        
        const targetSheet = new CSSStyleSheet();
        for(const stylesheet of stylesheets){
            for(const rule of stylesheet.cssRules){
                targetSheet.insertRule(rule.cssText, targetSheet.cssRules.length);
            }
        }
        
        
        (<any>targetRN).adoptedStyleSheets = [targetSheet];
    }
}

export interface BeAdoptive extends AllProps{}

export const tagName = 'be-adoptive';


const xe = new XE<AP, Actions>({
    config:{
        tagName,
        propDefaults:{
            ...propDefaults,
        },
        propInfo:  {
            ...propInfo
        },
        actions: {

        }
    },
    superclass: BeAdoptive
});
