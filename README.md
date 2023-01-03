# be-adoptive

be-adoptive allows Shadow DOM to inherit styles from the parent element.

This provides a way to benefit from the slotting Shadow DOM provides, while being able to apply styles from the outside.

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/be-adoptive)

[![Playwright Tests](https://github.com/bahrus/be-adoptive/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-adoptive/actions/workflows/CI.yml)

<a href="https://nodei.co/npm/be-adoptive/"><img src="https://nodei.co/npm/be-adoptive.png"></a>

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-adoptive?style=for-the-badge)](https://bundlephobia.com/result?p=be-adoptive)

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-adoptive?compression=gzip">

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

> **Note**: It has become clear to me, after [following](https://pinafore.social/statuses/109621173690604609) a discussion of alternatives [open-stylable](https://github.com/nolanlawson/open-stylable), that this solution is far from complete.  To be complete, the platform would need to provide a mechanism to subscribe to additions / removals of stylesheets from any Shadow DOM realm.  Or implement [this proposal](https://github.com/WICG/webcomponents/issues/909).

## Viewing Locally

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.
