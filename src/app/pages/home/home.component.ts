import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  posts: BlogPost[];

  constructor(private blogService: BlogService) {
    this.posts = this.blogService.getAll();
  }

  indexOf(post: BlogPost): string {
    return this.blogService.getIndexNumber(post);
  }
}
