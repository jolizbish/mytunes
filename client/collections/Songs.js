// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  parse: function(response) {
    return response.results;
  },
  
  initialize: function() {
    this.fetch();
    
  }
  
  // fetch: function() {
  //   $.ajax({
  //   // This is the url you should use to communicate with the parse API server.
  //     url: 'http://parse.atx.hackreactor.com/mytunes/classes/songs',
  //     type: 'GET',
  //     data: {},
  //     contentType: 'application/json',
  //     success: function (data) {
  //       console.log('MyTunes data received');
  //       this.add(data.results);
  //       console.log(data.results);
  //       return data.results;
  //     }.bind(this),
  //     error: function (data) {
  //       // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //       console.error('MyTunes: Failed to receive data', data);
  //     }
  //   });
  // }
});
