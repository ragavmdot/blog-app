import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectItem {
  name?: string;
  points: string[];
}

interface ExperienceItem {
  role: string;
  location: string;
  org: string;
  period: string;
  projects: ProjectItem[];
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
      projects: [
        {
          points: [
            'Led migration of a 40-component legacy Angular app to standalone components, cutting initial bundle size by 30%.',
            'Introduced a shared component library adopted across four product teams.',
            'Mentored two junior engineers through their first production routing and state-management work.'
          ]
        }
      ]
    },
    {
      role: 'Lead Applications Developer',
      location: 'Addison, TX',
      org: 'Wells Fargo Bank',
      period: '2023 — 2025',
      projects: [
        {
          name: 'Merchant Onboarding Services',
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
        }
      ]
    },
    {
      role: 'Senior .NET Developer',
      location: 'Houston, TX | Remote | Kitchener, ON, Canada',
      org: 'PrimeroEdge (aka School Cafe)',
      period: '2019 — 2023',
      projects: [
        {
          name: 'PrimeroEdge v2.0',
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
        }
      ]
    },
    {
      role: 'Senior Consultant',
      location: 'Dallas, TX',
      org: 'Army and Air Force Exchange Service | Capgemini',
      period: '2016 — 2019',
      projects: [
        {
          name: 'Digital Garrison',
          points: [
            'Gathered requirements and translated them into technical specifications, then designed and developed backend Web/REST APIs using C#, .NET Core, SQL Server, and AWS SDKs in a microservices architecture running on Docker containers, using a database-first Entity Framework approach for models and DbContexts.',
            'Integrated AWS Rekognition and SES for image scanning and authentication in S3 buckets, alongside Google\'s Geocoding API for location tracking and directions.',
            'Implemented a Firebase database to track customer push notification counts.',
            'Created and maintained AWS API Gateways for backend REST APIs, along with AWS DB instances for pre-production environments..',
            'Defined code policies and rulesets applied consistently across all shared microservices.',
            'Built shared library applications (DLLs) for custom business validations and wrote unit tests for the Web APIs using xUnit.'
          ]
        },
        {
          name: 'Military Star',
          points: [
            'Designed, developed, troubleshot, debugged, and tested microservice-architecture web APIs using C#, .NET Core 2.0, SQL Server, AWS Aurora, and NUnit.',
            'Designed and developed device-specific user interfaces and overall user experience for a Single Page Application built in Angular 4 using components, directives, and TypeScript.',
            'Created custom, reusable components using Angular Material UI for resource sharing across the application.',
            'Implemented push notifications via Firebase Cloud Messaging and Firebase Analytics to track in-app events and enhance user experience.',
            'Deployed and maintained microservices in Docker containers across all pre-production regions.',
            'Built signed APK (Android) and IPA (iOS) release bundles and published them to the Apple App Store and Google Play Store, coordinating testing across regions via App Store Connect TestFlight and the Google Play Console.'
          ]
        },
        {
          name: 'COLLECTIONS, ACCOUNT SERVICES, MyECP.com',
          points: [
            'Designed and developed web-based intranet applications using C#, .NET, MVC 5, JavaScript, jQuery, AJAX, Bootstrap, CSS3, SASS, and SQL.',
            'Used ADO.NET to connect to IBM DB2 backend databases, and wrote SQL queries, functions, views, and stored procedures using SQL Server 2008.',
            'Built responsive sites using media queries to support a range of devices and browsers.',
            'Redesigned existing pages per WCAG and Section 508 guidelines to meet accessibility compliance standards.',
            'Participated in business meetings to gather user scenarios and functional specifications, and prepared Technical Requirements Documents (TRDs) and Functional Requirements Documents (FRDs) to finalize business requirements and deliverables.',
            'Defined and documented project coding standards for consistent use across the team.'
          ]
        }
      ]
    },
    {
      role: 'Web Application Developer',
      location: 'Chennai, TN, India',
      org: 'iView Solutions',
      period: '2014 — 2016',
      projects: [
        {
          points: [
            'Developed web pages and rich UI components using C#, ASP.NET MVC, JavaScript, jQuery, AJAX, JSON, HTML5, CSS3, and CSS Sprites.',
            'Designed responsive UI for mobile devices using Bootstrap and CSS3 media queries.',
            'Resolved cross-browser compatibility issues to deliver unified CSS layouts across browsers.',
            'Provided maintenance and support for existing legacy applications.'
          ]
        }
      ]
    },
    {
      role: 'ECommerce Analyst',
      location: 'Manchester, UK',
      org: 'Monuj Ltd',
      period: '2012 — 2014',
      projects: [
        {
          points: [
            'Designed and developed responsive websites using Magento, JavaScript, jQuery, XML, HTML, CSS, and SQL, structuring layout and design to align with business goals.',
            'Wrote SQL scripts to generate custom reports through the Linnworks application.',
            'Produced weekly and monthly website traffic reports to support business decision-making.'
          ]
        }
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
