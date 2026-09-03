import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Fieldnotes — Journal' },
  { path: 'blog/:slug', component: BlogPostComponent, title: 'Fieldnotes — Entry' },
  { path: 'resume', component: ResumeComponent, title: 'Fieldnotes — Resume' },
  { path: '**', component: NotFoundComponent, title: 'Fieldnotes — Not found' }
];
