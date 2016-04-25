```html
<div class="main">

  <section>
    <h1>Hello World</h1>
  </section>

  <section>
    <h1>Hello World 2</h1>
  </section>

</div>
```

```stylus
html
  color: white
  text-align: center

section
  background: lighten(red, 40%)
  &:nth-child(2)
    background: lighten(blue, 40%)

.active
  h1
    animation: slideInFromLeft 3s forwards

@keyframes slideInFromLeft
  0%
    margin-left: -100%
  100%
    margin-left: 0
```

```javascript
$(".main").onepage_scroll();
```
