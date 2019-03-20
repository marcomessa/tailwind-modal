# Tailwind Modal
![npm (scoped)](https://img.shields.io/npm/v/@marcomessa/tailwind-modal.svg)

Simple modal with ready-to-use Tailwind css's markup.

This is a developer ready package which I use in my dev pipeline. It simply add ready-to-be-edited modal functionality. 

It uses a simple es6 class, so you have to take care about transpile (if you need it). Hope this could save a bit of time to someone!

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