```
<div class="dropdown">
  <a href="#">Dropdown</a>
  <nav>
    <a href="#">Sublink</a>
    <a href="#">Sublink</a>
    <a href="#">Sublink</a>
  </nav>
</div>
```

```
.dropdown
  display: inline-block
  > a
    display: inline-block
  nav
    transition: all 400ms ease
    max-height: 0
    overflow: hidden
    a
      display: block
  &:hover
    nav
      max-height: 999px


body
  padding: 3rem
a
  background: lighten(blue, 30%)
  color: white
  text-decoration: none
  padding: 1em 2em
```

```
$('.dropdown nav').css('max-height', '999px').hide();

$('.dropdown').click(function() {
  $(this).find('nav').toggle();
});
```
