import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class GithubReposService {

    constructor(private apiService: ApiService) { }

    getRepos(userName: string): Promise<Github[]> {
        return this.apiService.get(`users/${userName}/repos`);
    }

    getUser(userName: string): Promise<GithubUser> {
        return this.apiService.get(`users/${userName}`);
    }
}

export class Github {
    name: string;
    full_name: string;
    html_url: string;
    stargazers_count: number;
    watchers_count: number;
    description: string;
    owner: GithubOwner;
}
class GithubOwner {
    login: string;
    avatar_url: string;
}

export class GithubUser {
    name: string;
    login: string;
    avatar_url: string;
    followers: number;
    following: number;
    public_gists: number;
}