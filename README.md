# Redux Words

The goal is to create a page that displays the first 1000 words from `src/fixtures/words.json`

* create a `src/reducers/words.js`
  * it should load all words from `src/fixtures/words.json` into its state under
    a property called dictionary
* create a `src/reducers/index.js` file
  * use `combineReducer` with your words reducer
* import your reducer from `src/reducers/index.js` into your store
* create a `src/components/words/Words.js` file
  * `Words` should display a list of words
* create a `src/containers/words/TopWords.js`
  * `TopWords` should retrieve the first 1000 words
    * create a `src/selectors/words.js`
      * create a `getWords` selector that returns all words
      * create a `getFirstWords` selector that takes state and the number of words to fetch
        it should reuse the `getWords` selector
* return words by route
  * add `react-router-dom` to `src/components/app/App.js`
  * add a route for `/` that displays the first 1000 words
  * add a route from `/words/:count` that displays the first `count` words
    * reuse the `TopWords` component
* make words searchable by a searchTerm
  * update `src/reducers/words.js` to include a searchTerm
  * create a `src/actions/words.js` file
    * add a `UPDATE_SEARCH_TERM` action
  * update `src/reducers/words.js` to handle the `UPDATE_SEARCH_TERM`
  * create a `src/components/words/SearchForm.js`
  * create a `src/containers/words/SearchWords`
    * update `src/selectors/words.js` to include `getSearchTerm`
    * dispatch the `updateSearchTerm` action
  * update `TopWords` to display words that match `searchTerm`
    * update `src/selectors/words.js` to include `getTopWordsByTerm`
      * reuse other selectors
  * create a `src/components/words/Searchable.js`
    * this combines the `SearchWords` and `TopWords` containers
    * Use this for the `/words/:count` route
  * BONUS: handle `/words/:count?searchTerm=hi` to auto populate the `searchTerm` state
    * HINT: use [location](https://reacttraining.com/react-router/web/api/location) to get the
      query string
* BONUS: allow ability to update word colors
  * make this part of a query string as well
* BONUS: allow ability to update word background color
  * make this part of a query string as well
