import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/post.model';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  post: BlogPost | undefined;
  indexNumber = '';

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = this.blogService.getBySlug(slug);
    if (this.post) {
      this.indexNumber = this.blogService.getIndexNumber(this.post);
    }
  }
}
