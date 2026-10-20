import { Component, signal } from '@angular/core';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { Footer } from './layout/footer/footer';
import { ProjectsComponent } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Contact, Footer, ProjectsComponent, Experience],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-amado-microfront');
}
