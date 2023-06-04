import { BE, propDefaults, propInfo } from 'be-enhanced/BE.js';
import { XE } from 'xtal-element/XE.js';
import { register } from 'be-hive/register.js';
export class BeAdoptive extends BE {
    static get beConfig() {
        return {
            parse: false,
            //primaryProp: 'to'
        };
    }
    async attach(enhancedElement, enhancementInfo) {
        await super.attach(enhancedElement, enhancementInfo);
        const targetRN = enhancedElement.getRootNode();
        const host = targetRN.host;
        if (host === undefined)
            return;
        const rn = host.getRootNode();
        const stylesheets = rn.styleSheets;
        const targetSheet = new CSSStyleSheet();
        for (const stylesheet of stylesheets) {
            for (const rule of stylesheet.cssRules) {
                targetSheet.insertRule(rule.cssText, targetSheet.cssRules.length);
            }
        }
        targetRN.adoptedStyleSheets = [targetSheet];
    }
}
const tagName = 'be-adoptive';
const ifWantsToBe = 'adoptive';
const upgrade = 'style';
const xe = new XE({
    config: {
        tagName,
        propDefaults: {
            ...propDefaults,
        },
        propInfo: {
            ...propInfo
        },
        actions: {}
    },
    superclass: BeAdoptive
});
register(ifWantsToBe, upgrade, tagName);
