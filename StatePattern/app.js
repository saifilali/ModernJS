const PageState = function(){
  let currentState = new homeState(this);

  this.init = function() {
    this.change(new homeState);
  }

  this.change = function(state) {
    currentState = state;
  }
};

// Home State
const homeState = function(page){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
    <h1 class="display-4">Hello, State Pattern!</h1>
    <p class="lead">This is a simple state pattern project that works just like redux where we dont need 3 html pages for 3 tabs, but its all handle within app.js by power of state pattern.</p>
    <hr class="my-4">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  `;
};

// About State
const aboutState = function(page){
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</P>
  </div>
  `;
};

// Contact State
const contactState = function(page){
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control">
      </div>
      <div class="form-group">
        <label>Email address</label>
        <input type="email" class="form-control">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
};

// Instantiate PageState
const page = new PageState();

// Initialize First State
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home Event Listener
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About Event Listener
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Home Event Listener
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});
