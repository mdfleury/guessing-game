var app = new Vue({
  el: '#app',
  data: {
    guess: 0,
    message: '',
    count: 0,
    disabled: true,
    secret: 0,
    maxGuess: 0,
    minGuess: 0,
    min: 1,
    max: 100
  },
  methods: {
    start: function() {
      this.disabled = false;
      this.count = 0;
      this.message = '';
      this.guess = '';
      this.maxGuess = this.max;
      this.minGuess = this.min - 1;
      this.secret = Math.floor(Math.random() * (this.max - this.min) + this.min);
    },
    submitGuess: function(event) {
      event.preventDefault();
      if (this.guess === 0) return;
      this.count++;
      switch (true) {
        case this.secret == this.guess:
          this.message = "You win!!";
          this.disabled = true;
          break;
        case this.secret < this.guess:
          this.message = "Too big";
          if (this.maxGuess == this.max || this.maxGuess > this.guess) {
            this.maxGuess = parseInt(this.guess, 10);
          }
          this.guess = '';
          break;
        case this.secret > this.guess:
          this.message = "Too small";
          if (this.minGuess == this.min || this.minGuess < this.guess) {
            this.minGuess = parseInt(this.guess, 10);
          }
          this.guess = '';
          break;
      }
    }
  }
});
