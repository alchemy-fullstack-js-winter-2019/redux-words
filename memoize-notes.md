Reselect package - memoize

'func' is an array of functions

```
function createSelector(..func) {
  // remove last arg/function to memoize - set to lastFunction
  const lastFunction = funcs.pop();

  return function(state) {
    // memoize lastFunction
    // if memoizedLastFunction gets same params it returns the last result
    // if memoizedLastFunction gets new params it recomputes lastFunction and returns those results
    const memoizedLastFunction = memo(lastFunction);

    // get result from all funcs
    // create an array of params
    const params = funcs.map(fn => {
      return fn(state);
    })

    /// [1, 2, 3]
    // memoizedLastFunction(1, 2, 3);
    // memoizedLastFunction.apply(null, params);
    // Reflect.apply(memoizedLastFunction, null, params);
    return memoizedLastFunction(...params);
  }
}
```
