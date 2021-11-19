import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeAdoptiveVirtualProps, BeAdoptiveProps, BeAdoptiveActions} from './types';
import {register} from 'be-hive/register.js';

export class BeAdoptiveController implements BeAdoptiveActions{
    intro(proxy: HTMLTemplateElement & BeAdoptiveVirtualProps, target: HTMLStyleElement, beDecorProps: BeDecoratedProps): void {
        const host = (<any>target.getRootNode()).host;
        if(host === undefined) return;
        const rn = host.getRootNode();
        const stylesheets = rn.styleSheets;
        
        const targetSheet = new CSSStyleSheet();
        for(const stylesheet of stylesheets){
            console.log(stylesheet);
            for(const rule of stylesheet.cssRules){
                targetSheet.insertRule(rule.cssText, targetSheet.cssRules.length);
            }
        }
        
        
        (<any>target.getRootNode()!).adoptedStyleSheets = [targetSheet];
    }

}

export interface BeAdoptiveController extends BeAdoptiveProps{}

const tagName = 'be-adoptive';

const ifWantsToBe = 'adoptive';

const upgrade = 'style';

define<BeAdoptiveProps & BeDecoratedProps<BeAdoptiveProps, BeAdoptiveActions>, BeAdoptiveActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            forceVisible: true,
            virtualProps:[],
            intro: 'intro'
        }
    },
    complexPropDefaults:{
        controller:BeAdoptiveController
    },
});

register(ifWantsToBe, upgrade, tagName);


