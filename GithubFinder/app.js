// Initialize GitHub
const github = new GitHub;

//Initialize UI
const ui = new UI;

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input Event Listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    // Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show alert
          ui.showAlert('User not found', 'alert alert-danger');
        }
        else{
          // Show profile
          ui.showProfile(data.profile);
          // Show Repos
          ui.showRepos(data.repos);
        }
        console.log(data);
      });
  }
  else{
    // Clear profile
    ui.clearProfile();
  }
});