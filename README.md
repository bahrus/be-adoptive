# be-adoptive

be-adoptive allows Shadow DOM to inherit styles from the parent element.

This provides a way to benefit from the slotting Shadow DOM provides, while being able to apply styles from the outside.

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