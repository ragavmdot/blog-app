import { Injectable } from '@angular/core';
import { BlogPost } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly posts: BlogPost[] = [
    {
      id: 4,
      slug: 'component-first-angular',
      title: 'Why every screen deserves its own component',
      excerpt:
        'A single-file app is fast to start and slow to change. Notes on splitting an Angular app along the seams that actually matter.',
      author: 'Ragav Mohankumar',
      date: '2026-08-02',
      readTime: '6 min',
      tags: ['angular', 'architecture'],
      content: [
        'The fastest way to ship a demo is to put everything in one component. The fastest way to regret it is to keep doing that past the third screen.',
        'A route should map to a component, and a component should map to one job. When the blog list, the post reader, and the resume all lived in one file, a change to the resume layout risked breaking the tag filter on the list page. Splitting them along route boundaries removed that risk entirely — each page now compiles, renders, and fails independently.',
        'Standalone components make this split cheaper than it used to be. There is no module tree to maintain, no NgModule to remember to declare a component in — a page imports exactly the pieces it uses and nothing else.',
        'The rule of thumb: if two pieces of UI change for different reasons, they belong in different components. A navigation bar changes when the site map changes. A post card changes when the content model changes. They should never be edited in the same file for unrelated reasons.'
      ]
    },
    {
      id: 3,
      slug: 'reading-list-margins',
      title: 'What I underline: a reading list with margin notes',
      excerpt:
        'Three papers and a manual that changed how I think about state, and the specific sentence in each that did it.',
      author: 'Ragav Mohankumar',
      date: '2026-07-18',
      readTime: '4 min',
      tags: ['reading', 'notes'],
      content: [
        'I keep a running file of sentences, not summaries. A summary tells you what a paper said. A sentence, copied out with the page number, tells you what stopped you.',
        'Most of what ends up in the margin is a definition sharpened past the point I expected — a word I thought I understood, redrawn with a harder edge.',
        'The habit is slower than highlighting and faster than note-taking. It also travels: a margin note from a paper read years ago still explains itself when I find it again.'
      ]
    },
    {
      id: 2,
      slug: 'debugging-as-reading',
      title: 'Debugging is a reading skill, not a tooling skill',
      excerpt:
        'The debugger finds where the program is. It does not tell you what the program means. That part is still on you.',
      author: 'Ragav Mohankumar',
      date: '2026-06-29',
      readTime: '5 min',
      tags: ['debugging', 'craft'],
      content: [
        'Every debugger answers the same question well: where are we right now. It answers a different question poorly: what did the author of this code believe when they wrote it.',
        'The second question is the one that actually closes the bug. It requires reading the code as an argument — a claim about how the system behaves — and finding the line where the claim stops being true.',
        'Breakpoints are useful for narrowing where to read closely. They are not a substitute for reading closely.'
      ]
    },
    {
      id: 1,
      slug: 'first-entry',
      title: 'Starting a fieldnotes journal',
      excerpt:
        'Why a personal log of small, specific technical decisions is worth more than another portfolio homepage.',
      author: 'Ragav Mohankumar',
      date: '2026-06-01',
      readTime: '3 min',
      tags: ['meta'],
      content: [
        'Portfolio sites tend to describe outcomes: shipped this, led that. They rarely show the small decision in the middle that made the outcome possible.',
        'This journal is an attempt to keep those decisions somewhere — the naming choice, the library swapped out, the bug that turned out to be a reading problem rather than a code problem.',
        'No fixed schedule. An entry goes up when there is something specific enough to be worth writing down.'
      ]
    }
  ];

  getAll(): BlogPost[] {
    return [...this.posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  getBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((post) => post.slug === slug);
  }

  getIndexNumber(post: BlogPost): string {
    return String(post.id).padStart(3, '0');
  }
}
