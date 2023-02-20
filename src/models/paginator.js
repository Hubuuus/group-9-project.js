import Paginator from 'js-paginator';

new Paginator('#pager', {
  offset: 3,
  startPage: 10,
  hideDisabled: false,
  ajax: {
    // The URL to the data source
    url: 'url/to/data',

    // The page number is used with this param, e.g. url/to/data.php?page=3
    param: 'page',

    // Custom params to send with the request
    data: {
      prop1: 8,
      prop2: 'hi',
    },
    before: function () {
      // do something before the fetch() request
      // e.g. add a loading indicator
    },
    success: function (data) {
      // do something with the returned data
      // e.g. insert the loaded data into the document
    },
  },
});
