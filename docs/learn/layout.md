# Mastering Layouts Part 1 : Basic Layouts  

Here you'll start by learning to apply basic horizontal and vertical layout patterns. In Part 2 we'll learn how to achieve more complex layouts by using a grid system.  

##Basic layouts 

These basic layouts assign a direction for a parent container to arrange its children. Layouts are defined by assigning a direction and the gutter (spacing) you want between each element. 

**Example**  
```
@gutter: 16px;
.my-horizontal-layout{
  #layout.horizontal(@gutter);
}

.my-vertical-layout{
  #layout.vertical(@gutter);
}
```

##Changing layout direction 
The layout mixins are designed to be swappable in case you need to change direction. In the example below  direction changes based on the screen width.  

```
.my-layout{
  #layout > .vertical(@gutter);
}

@media all and (max-width: 50em) {
  .my-layout > .horizintal(@gutter);
}
```  

##When to use layouts instead of grids.
1. **When you don't need to the child elements to fit end to end inside the parent container.** Layouts use [margins](https://developer.mozilla.org/en-US/docs/Web/CSS/margin) to apply the gutter. Margins add an additional width to each element which makes it difficult to calculate the precise width needed to fill an entire container. 
2. **When you don't need the child elements to wrap to another line or column.** If elements might need to wrap inside the layout container, use a grid system. When elements wrap inside a layout container the gutters on wrapping items break the alignment.