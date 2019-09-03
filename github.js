class Github {
    constructor() {
        this.client_id = 'c8a6e15cbb8a594fe5e7';
        this.client_secret = '45fca0f7845cef4a2012d760cb9281964a5ad782';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&this.client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&this.client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        
        return{
            profile,
            repos
        }
    }
}