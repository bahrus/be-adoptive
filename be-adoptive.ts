import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeAdoptiveVirtualProps, BeAdoptiveProps, BeAdoptiveActions} from './types';
import {register} from 'be-hive/register.js';

export class BeAdoptiveController implements BeAdoptiveActions{
    intro(proxy: HTMLTemplateElement & BeAdoptiveVirtualProps, target: HTMLStyleElement, beDecorProps: BeDecoratedProps): void {
        target.textContent = proxy.textContent;
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


