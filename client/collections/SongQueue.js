// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    console.log('song queue', this);
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function() {
      console.log('song ended');
      this.playNext();
    });
    
    this.on('dequeue', function(song) {
      var index = _.indexOf(song);
      if (index === 0) {
        this.model.ended();
      }
      this.remove(this.at(index));
    });
    
    this.on('enqueue', function(song) {
      console.log('enqueue event heard');
      this.add(song);
    }, this);
    
    // this.on('', function() {
    //   console.log('rerendering');
    //   this.render();
    // }, this);
  },
  
  playFirst: function() {
    this.at(0).play();
  },
  
  playNext: function() {
    this.shift();
    if (this.length) {
      this.playFirst();
    }
  }
  
  // dequeue: function() {
  //   this.shift();
  //   this.playFirst();
  // }
});