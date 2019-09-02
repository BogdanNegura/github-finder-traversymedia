class Github {
    constructor() {
        this.client_id = 'c8a6e15cbb8a594fe5e7';
        this.client_secret = '45fca0f7845cef4a2012d760cb9281964a5ad782';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&this.client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        
        return{
            profile
        }
    }
}