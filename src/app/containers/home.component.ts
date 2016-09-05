import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubReposService, Github, GithubUser } from '../services/github-repos.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    form: FormGroup;
    githubRepos: Github[];
    githubUser: GithubUser;
    avatarUrl: string = '';

    constructor(
        private fb: FormBuilder,
        private githubReposService: GithubReposService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
        this.form = this.fb.group({
            userName: ['shammelburg', Validators.required]
        });
    }

    ngOnInit() {

        this.activatedRoute.params.forEach((params: Params) => {
            let userName = params['username'];
            if (userName) {
                this.getRepos(userName);
                this.getUser(userName);
            }
        });
    }

    submit(form: any): void {
        if (this.form.valid)
            this.router.navigate(['user', form.userName, 'repos']);
    }

    getRepos(userName: string) {
        this.githubReposService.getRepos(userName)
            .then(r => {
                //console.log(r);
                this.githubRepos = r;
            })
            .catch(r => console.error(r));
    }

    getUser(userName: string) {
        this.githubReposService.getUser(userName)
            .then(r => {
                // issue here, setting r to githubUser
                this.githubUser = r;
                
                this.avatarUrl = r.avatar_url;
                this.form.controls['userName'].setValue(userName);
            })
            .catch(r => console.error(r));
    }
}