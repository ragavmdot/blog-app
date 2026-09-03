import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  paragraphs = [
    'I\'m Ragav — a senior .NET and Angular developer who started this journal because the interesting part of the job rarely survives past the pull request. This is where the small, specific decisions get kept.',
    'Day to day that means backend services in .NET, frontend architecture in Angular, and the connective tissue between them — APIs, CI/CD, and deployment on AWS and Azure. The entries here lean toward whatever forced a real decision that week, not whatever is trending.',
    'Outside the day job: reading with a pen in hand, arguing with code I wrote a year ago, and slowly rewriting this site every time I learn a better way to structure an Angular app.'
  ];
}
