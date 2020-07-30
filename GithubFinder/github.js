class GitHub {
  constructor(){
    this.client_id = 'dac90db22aea0a7f2780';
    this.client_secret = '5c5c791ca8092850ac7a1848f1bb1bec565c68db';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const reposData = await repoResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }
}