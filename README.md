# Tailwind Modal
![npm (scoped)](https://img.shields.io/npm/v/@marcomessa/tailwind-modal.svg)
Simple modal with ready-to-use Tailwind css's markup.

## Install

```
$ npm install @marcomessa/tailwind-modal
```

## Usage

###### HTML
```html
<a href="#" data-open="exampleModal">Click me</a>
<div id="exampleModal" class="modal">
    <div class="modal__inner">
        Test Modal

        <button class="modal__button">
            close
        </button>
    </div>
</div>
```

###### JS
```js
import Modals from "@marcomessa/tailwind-modal";

...

const modals = new Modals();
modals.init();
```

###### SCSS
```scss
@import '~@marcomessa/tailwind-modal/modal';
```