import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeAdoptiveController {
    intro(proxy, target, beDecorProps) {
        target.textContent = proxy.textContent;
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
            forceVisible: true,
            virtualProps: [],
            intro: 'intro'
        }
    },
    complexPropDefaults: {
        controller: BeAdoptiveController
    },
});
register(ifWantsToBe, upgrade, tagName);
