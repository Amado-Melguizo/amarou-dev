import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface GithubRepo {
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  updated_at: string;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private readonly http = inject(HttpClient);

  getRepositories() {
    return this.http.get<any[]>(
      'https://api.github.com/users/Amado-Melguizo/repos?sort=updated'
    );
  }
}
