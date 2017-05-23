// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    
    this.on('ended', function() {
      console.log('song ended');
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }),
    
    this.on('dequeue', function() {
      var index = _.indexOf(this);
      this.remove(this.at(index));
    });
    
    this.on('enqueue', function(song) {
      this.push(song);
    });
  },
  
  playFirst: function() {
    this.at(0).play();
  },
  
  dequeue: function() {
    this.shift();
    this.playFirst();
  }
});