import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  points: string[];
}

interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  name = 'Balaragavendran Mohankumar';
  title = 'Senior Software Developer';
  location = 'Remote, US';
  email = 'ragavmohankumar@gmail.com';
  links = [
    { label: 'fieldnotes.dev', href: '#' },
    // { label: 'github.com/ragavmdot', href: '#' },
    { label: 'linkedin.com/in/dotragavm', href: '#' }
  ];

  summary =
    'Full-stack .NET and Angular developer building scalable web applications with modern cloud solutions on AWS and Azure. Experienced across frontend architecture, backend services, APIs, databases, CI/CD, and cloud-native deployment.';

  experience: ExperienceItem[] = [
    {
      role: 'Senior Software Developer (.NET Full Stack)',
      org: 'Santander Consumer USA | Ascendion',
      period: '2025 — Present',
      points: [
        'Led migration of a 40-component legacy Angular app to standalone components, cutting initial bundle size by 31%.',
        'Introduced a shared component library adopted across four product teams.',
        'Mentored two junior engineers through their first production routing and state-management work.'
      ]
    },
    {
      role: 'Lead Applications Developer',
      org: 'Wells Fargo Bank',
      period: '2023 — 2025',
      points: [
        'Built the customer-facing analytics dashboard from a single-page prototype into a routed, component-based app.',
        'Owned the design system\'s typography and spacing tokens across five product surfaces.'
      ]
    },
    {
      role: 'Senior .NET Developer',
      org: 'PrimeroEdge (aka School Cafe)',
      period: '2019 — 2023',
      points: [
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    },
    {
      role: 'Senior Consultant',
      org: 'Army and Air Force Exchange Service | Capgemini',
      period: '2016 — 2019',
      points: [
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    },
    {
      role: 'Web Application Developer',
      org: 'iView Solutions',
      period: '2014 — 2016',
      points: [
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    },
    {
      role: 'ECommerce Analyst',
      org: 'Monuj Ltd',
      period: '2012 — 2014',
      points: [
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    }
  ];

  education: EducationItem[] = [
    { degree: 'M.S. Advanced Computer Science', school: 'University of Liverpool, Manchester, UK', period: '2010 — 2011' },
    { degree: 'B.E. in Information Technology', school: 'Annamalai University, Tamil Nadu, India', period: '2006 — 2010' }
  ];

  skills: SkillGroup[] = [
    { label: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'SCSS'] },
    { label: 'Frameworks', items: ['Angular', 'React', 'RxJS', 'Node.js'] },
    { label: 'Practice', items: ['Component architecture', 'Design systems', 'Accessibility', 'Testing'] }
  ];

  print(): void {
    window.print();
  }
}
