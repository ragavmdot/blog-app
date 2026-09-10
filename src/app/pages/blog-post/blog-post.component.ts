import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { marked } from 'marked';
import { BlogService } from '../../services/blog.service';
import { BlogPost, PostContentBlock } from '../../models/post.model';

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

  renderMarkdown(block: PostContentBlock): string {
    const markdown = typeof block === 'string'
      ? block
      : block.type === 'markdown'
        ? block.value
        : '';

    return marked.parse(markdown) as string;
  }

  isImageBlock(
    block: PostContentBlock
  ): block is { type: 'image'; src: string; alt: string; caption?: string } {
    return typeof block !== 'string' && block.type === 'image';
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.post = this.blogService.getBySlug(slug);
    if (this.post) {
      this.indexNumber = this.blogService.getIndexNumber(this.post);
    }
  }
}
