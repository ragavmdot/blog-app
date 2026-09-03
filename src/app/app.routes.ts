import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent, title: 'devLogs — About' },
  { path: '', component: HomeComponent, title: 'devLogs — Journal' },
  { path: 'blog/:slug', component: BlogPostComponent, title: 'devLogs — Entry' },
  { path: 'resume', component: ResumeComponent, title: 'devLogs — Resume' },
  { path: '**', component: NotFoundComponent, title: 'devLogs — Not found' }
];
