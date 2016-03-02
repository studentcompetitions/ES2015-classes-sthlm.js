# ES2015 classes presentation
This contains the examples from the presentation about ES2015 classes that was
held on the sthlm.js meetup on the 2016-03-01.

To learn more about ES2015 classes see [Mozilla Devloper Network][1].

## The exemple classes
There are three classes, `Bazar`, `Person` and `Fool` that extends from
`Person`. These are written in four different styles, using more and more
ES2015 features, up til the `class` syntax.

To play around with the ES5 ones open up a node REPL and load them, like so:

```shell
$ > node
> .load es5-vanilla.js
... # Bunch of output
> .load example.js
```

For the ES2015, you need the harmony flag:
```shell
$ > node --harmony
> .load es2015.js
... # Bunch of output
> .load example.js
```

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
