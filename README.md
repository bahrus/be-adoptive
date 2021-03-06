# be-adoptive

be-adoptive allows Shadow DOM to inherit styles from the parent element.

This provides a way to benefit from the slotting Shadow DOM provides, while being able to apply styles from the outside.

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/be-adoptive)

<a href="https://nodei.co/npm/be-adoptive/"><img src="https://nodei.co/npm/be-adoptive.png"></a>

## [Demo](https://codepen.io/bahrus/pen/porYqaz)  

Demo only works in Chrome without polyfills (declarative shadow DOM, [constructible stylesheets](https://github.com/calebdwilliams/construct-style-sheets)).

Native support in Firefox is [experimental](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#constructable_stylesheets).

Here's to hoping it is adopted soon by Safari.

## Syntax:

```html
<style>
    span{
        color: red;
    }
</style>
<div>
    <template shadowroot="open">
        <style be-adoptive>
            div{
                color: green;
            }
        </style>
        <span>Hello</span>
        <be-hive></be-hive>
    </template>
</div>
<span>Hello</span>
<be-hive></be-hive>
```

To be fully HTML5 compatible, use data-be-adoptive instead of be-adoptive.

The be-hive component allows us to specify an alternative attribute name, and acts as a "conduit" for all the [be-*](https://github.com/bahrus?tab=repositories&q=be-&type=&language=&sort=) components.  Alternatively, we can place an instance of the be-adoptive web component in our shadow DOM, and that will have the same effect.

## Viewing Locally

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.
