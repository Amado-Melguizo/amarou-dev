import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  updated_at: string;
  demoUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent implements OnInit {
  show404Preview = false;
  repos: GithubRepo[] = [];

  private featuredProjects = ['MinesWeeperWar', 'Page404StarWars', 'DashBoard', 'bailoteca'];

  private http = inject(HttpClient);
  ngOnInit(): void {
    this.http
      .get<GithubRepo[]>('https://api.github.com/users/Amado-Melguizo/repos?per_page=100')
      .subscribe((repositories) => {
        this.repos = repositories
          .filter((repo) => this.featuredProjects.includes(repo.name))
          .map((repo) => ({
            ...repo,
            demoUrl: `https://amado-melguizo.github.io/${repo.name}/`,
          }))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());
      });
  }

  projects = [
    {
      name: 'MinesWeeperWar',
      description: 'Buscaminas basado en Star Wars desarrollado con JavaScript.',
      demo: 'https://amado-melguizo.github.io/MinesWeeperWar/',
      github: 'https://github.com/Amado-Melguizo/MinesWeeperWar',
    },
    {
      name: 'Acuarela Sana',
      description: 'Web corporativa para Acuarela Sana.',
      demo: 'https://amado-melguizo.github.io/acuarelasana/',
      github: 'https://github.com/Amado-Melguizo/acuarelasana',
    },
    {
      name: 'Page404StarWars',
      description: 'Página 404 temática de Star Wars.',
      demo: 'https://amado-melguizo.github.io/Page404StarWars/',
      github: 'https://github.com/Amado-Melguizo/Page404StarWars',
    },
    {
      name: 'Catan Duo',
      description: 'Versión digital del juego Catán.',
      demo: 'https://amado-melguizo.github.io/catan-duo/',
      github: 'https://github.com/Amado-Melguizo/catan-duo',
    },
  ];
}
