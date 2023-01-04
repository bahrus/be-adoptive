import { define } from 'be-decorated/DE.js';
import { register } from 'be-hive/register.js';
export class BeAdoptiveController {
    intro(proxy, target, beDecorProps) {
        const targetRN = target.getRootNode();
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
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            forceVisible: ['style'],
            virtualProps: [],
            intro: 'intro'
        }
    },
    complexPropDefaults: {
        controller: BeAdoptiveController
    },
});
register(ifWantsToBe, upgrade, tagName);
