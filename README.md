Node and Sequelize 
===================

+==============================================
### Express
+==============================================

Use `npx` to run `Express generator` without installing it globally.

```
npx express-generator --view=pug myNewApp
```

+==============================================
### ORM
+==============================================

```
npm install --save sequelize
npm install --save mysql2
```

### Details


### Learnings
 
 1. [Reference Reading][1]

#### Sequelize.sync

While doing a `sync` on the whole of the databse

```
sequelize.sync({force:true}).then(function(){}).catch(function(error){})
```
It constantly threw me the error `TypeError: this.model.bulkBuild is not a function`

 - It was just because I had a `type error`, instead of `modelName` I was typing 'model'.
 - Then there must be a `return` from the `model`, which in some models I was missing.



[ref_1]: https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz