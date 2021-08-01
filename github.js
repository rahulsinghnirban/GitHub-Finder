class Github {

    constructor(){
        //client id and client secret no for github api authentication to use this application fully

        this.client_id = '5e566dd724dc44f24deb';
        this.client_secret ='b24f12c454b30c21b25b3d178d692a4cdf09abc1';
        //for repos

        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}