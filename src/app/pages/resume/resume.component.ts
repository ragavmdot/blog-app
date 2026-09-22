import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  role: string;
  location: string;
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
      role: 'Senior Software Developer',
      location: 'Dallas, TX',
      org: 'Santander Consumer USA | Ascendion',
      period: '2025 — Present',
      points: [
        'Led migration of a 40-component legacy Angular app to standalone components, cutting initial bundle size by 30%.',
        'Introduced a shared component library adopted across four product teams.',
        'Mentored two junior engineers through their first production routing and state-management work.'
      ]
    },
    {
      role: 'Lead Applications Developer',
      location: 'Addison, TX',
      org: 'Wells Fargo Bank',
      period: '2023 — 2025',
      points: [
        'Designed and developed UI applications using Angular 12/15/16, Kendo UI, TypeScript, and RxJS.',
        'Built backend REST API microservices using C#, .NET Core, SQL Server, and MongoDB.',
        'Developed RESTful web services using Node JS (Express) to write audit logs to MongoDB.',
        'Engineered reusable Components, Modules, Directives, Services (as Dependency Injections), and Pipes using Angular and Kendo UI to improve code quality and maintainability.',
        'Architected a new Angular SPA for Business and Individual Tax/ITIN validation, featuring Single Sign-On via OAuth 2.0 and Ping.',
        'Built REST APIs using .NET Core to fetch data from Hogan Services and write to Kafka topics.',
        'Developed custom NuGet packages for salt-based data encryption using HashiCorp Key Vault.',
        'Integrated SonarQube, Trufflehog, and Checkmarx into the Jenkins pipeline, and TSLint into Angular projects, to strengthen code quality and security',
        'Automated UI and API testing using the Selenium framework.',
        'Wrote unit tests using Karma (Angular) and NUnit (.NET Core).'
      ]
    },
    {
      role: 'Senior .NET Developer',
      location: 'Houston, TX | Remote | Kitchener, ON, Canada',
      org: 'PrimeroEdge (aka School Cafe)',
      period: '2019 — 2023',
      points: [
        'Designed and developed robust backend REST APIs in a microservices architecture using C#, .NET Core, SQL Server, MongoDB, Couchbase, and LINQ.',
        'Built Angular custom directives, components, and modules encapsulating business logic and rules.',
        'Implemented Angular services for state management across components using RxJS Observables.',
        'Developed a reusable input component library using Angular Material.',
        'Delivered 13+ production Paginated Reports using Microsoft Power BI.',
        'Configured cron jobs with serverless Azure Functions to sync master and micro databases.',
        'Architected and developed custom NuGet packages using Azure Service Bus for Service Logs, Caching, Data Processing, App Utilities, SMS, and Email services.',
        'Implemented individual APIs and API orchestrations using Azure API Management.',
        'Integrated RabbitMQ within a .NET Web API service to trigger asynchronous events writing to Couchbase servers, decoupling large application components.',
        'Implemented application logging with Azure Application Insights.'
      ]
    },
    {
      role: 'Senior Consultant',
      location: 'Dallas, TX',
      org: 'Army and Air Force Exchange Service | Capgemini',
      period: '2016 — 2019',
      points: [
        'Project 1: Digital Garrison',
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    },
    {
      role: 'Web Application Developer',
      location: 'Chennai, TN, India',
      org: 'iView Solutions',
      period: '2014 — 2016',
      points: [
        'Shipped marketing sites and small web apps for a rotating slate of clients.',
        'Wrote the team\'s first component-testing guide, still in use.'
      ]
    },
    {
      role: 'ECommerce Analyst',
      location: 'Manchester, UK',
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
