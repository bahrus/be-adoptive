import {BeDecoratedProps} from 'be-decorated/types';

export interface BeAdoptiveVirtualProps{

}

export interface BeAdoptiveProps {
    proxy: HTMLStyleElement & BeAdoptiveVirtualProps;
}

export interface BeAdoptiveActions{
    intro(proxy: HTMLTemplateElement & BeAdoptiveVirtualProps, target: HTMLStyleElement, beDecorProps: BeDecoratedProps): void;
}