# About Open Dragon

Fast & Simple & Clean frontend builder. Eat less do more.

## The goal 

to build a ptfmt compatible commonjs based but AMD
focused code manager with amazing es2015 modules support.


## Commands

```
p / project
a / application
v / view
m / modul
g / group
f / file
x / extension
a / admin 
```



## Simple logic
```


project:
   can hold:
       -applications
       -views
       -moduls
       -groups
       -extensions
       -files

application: 
   -can hold modules

view: 
   -can hold modules

modul:
   can hold:
       -groups
       -extensions
       -files

group:
   can hold files

file: 
  can be :
         .css
         .js
         .html 
         .md // for the inside doc


the extension is a group



```





