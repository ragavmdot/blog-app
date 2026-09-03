import { Injectable } from '@angular/core';
import { BlogPost } from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  private readonly posts: BlogPost[] = [
    {
      id: 9,
      slug: 'minimal-apis-vs-controllers',
      title: 'Minimal APIs at scale: the questions the demo never asks',
      excerpt:
        'A minimal API endpoint is three lines until it needs a filter, a versioning scheme, and a test double. Notes on where the "simpler" model starts billing you back.',
      author: 'Ragav Mohankumar',
      date: '2026-09-03',
      readTime: '6 min',
      tags: ['dotnet', 'architecture'],
      content: [
        'Every minimal API talk opens with the same trick: a controller collapsed into a lambda, ten lines gone in one slide. It is a real improvement for a health check or a webhook. It stops being a fair comparison the moment the endpoint needs the things a controller gave you for free.',
        'Controllers came with a shape already agreed on — action filters, model binding conventions, a base class to hang cross-cutting concerns off of, a well-worn pattern for versioning by route or header. Minimal APIs make you rebuild that shape yourself out of endpoint filters and extension methods, one route group at a time. That is not automatically worse. It is a different bill, paid later, by whoever owns the endpoint after the tenth one gets added.',
        'The place this actually shows up is testing. A controller action is a method on a class; you instantiate the class and call it. A minimal API handler is a delegate registered against a route, and the honest way to test it is through `WebApplicationFactory`, which is heavier and slower than most teams admit when they pick the pattern for its lightness.',
        'The rule I use now: minimal APIs for a small, flat surface — a handful of routes, little shared behavior, nothing that needs versioning. Controllers once an area accretes enough filters, binders, and conventions that a base class earns its keep. Picking one for the whole codebase up front is optimizing for the first endpoint instead of the fiftieth.'
      ]
    },
    {
      id: 8,
      slug: 'securing-dotnet-api-end-to-end',
      title: 'Securing a .NET API end to end: past the [Authorize] attribute',
      excerpt:
        'The attribute is the easy ten percent. Notes on refresh token rotation, rate limiting, and secrets management from an API that actually got attacked.',
      author: 'Ragav Mohankumar',
      date: '2026-08-19',
      readTime: '7 min',
      tags: ['dotnet', 'security'],
      content: [
        '`[Authorize]` answers one question: is there a valid token. It says nothing about whether that token should still be valid, whether the caller is allowed to hit this endpoint sixty times a second, or where the signing key lives. Most of the actual security work starts after the attribute compiles.',
        'Refresh token rotation is the one teams skip longest, because a long-lived access token feels fine until it leaks in a log line. Rotating on every use and revoking the old token immediately turns a stolen refresh token into a one-time-use artifact instead of a standing credential — the cost is a bit of extra state in Redis, which is a trade worth making.',
        'Rate limiting went from a third-party package to a first-party concern with `Microsoft.AspNetCore.RateLimiting`, and the part that matters is picking the partition key correctly — per-user for authenticated routes, per-IP for the login endpoint itself, because that is exactly the endpoint credential stuffing targets and it has no user identity to key on yet.',
        'Secrets management is the least glamorous line item and the one that actually gets audited: no connection string or signing key in appsettings, everything through Key Vault or its equivalent with managed identity, rotated on a schedule instead of when someone remembers. The OWASP checklist is a good final pass, but it is a checklist for gaps, not a design process — write the threat model first.'
      ]
    },
    {
      id: 7,
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
      id: 6,
      slug: 'distributed-tracing-opentelemetry',
      title: 'Distributed tracing across API, workers, and frontend with OpenTelemetry',
      excerpt:
        'Logs tell you what happened in one place. A trace tells you what happened to one request. Wiring the second one up in a .NET stack that spans a frontend and background workers.',
      author: 'Ragav Mohankumar',
      date: '2026-08-01',
      readTime: '6 min',
      tags: ['dotnet', 'observability'],
      content: [
        'A log line answers "what happened here." A trace answers "what happened to this specific request, across every service it touched." The difference only matters once a request crosses a process boundary — which in practice is almost immediately, the moment an API call enqueues a background job.',
        'OpenTelemetry earns its adoption cost by being the one thing that is not vendor-specific: the SDK is the same whether traces end up in Application Insights, Grafana Tempo, or Jaeger, so the instrumentation survives a backend migration that the old vendor SDK never would have.',
        'The part that takes actual work is context propagation past HTTP — a trace ID travels for free across an outgoing `HttpClient` call because the SDK patches it, but it has to be threaded through manually into a Hangfire job payload or a message queue header, or the trace just ends at the API boundary and the background half of the request becomes invisible again.',
        'The payoff shows up the first time a slow request gets root-caused in one screen instead of three log searches across three services. The failure mode to watch for is the opposite problem: instrumenting every method until the traces are as noisy as the logs were. Trace the boundaries — HTTP in, queue out, database call — and let the code in between stay untraced.'
      ]
    },
    {
      id: 5,
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
      id: 4,
      slug: 'cqrs-without-ceremony',
      title: 'CQRS without the ceremony',
      excerpt:
        'MediatR makes it easy to add a handler for everything, including the things that never needed one. Where the split actually pays for itself.',
      author: 'Ragav Mohankumar',
      date: '2026-07-14',
      readTime: '5 min',
      tags: ['dotnet', 'architecture'],
      content: [
        'CQRS is an answer to a specific problem: reads and writes that want different models, different performance characteristics, sometimes different data stores entirely. Reaching for it because a tutorial used MediatR is solving a problem the codebase does not have yet.',
        'The version that earns its keep is narrow: commands go through a pipeline because they need validation, authorization, and a transaction boundary applied consistently. Queries stay as plain, boring methods that return a DTO shaped exactly for the screen asking for it. Wrapping every query in a handler and a pipeline just to be consistent adds a file and an indirection for no behavior gained.',
        'The tell that CQRS was applied too early is a query handler that calls the domain model instead of just querying — at that point the "read side" has quietly become a second write side, and the split has stopped doing its job.',
        'Full event sourcing is a different, much bigger decision, and conflating it with CQRS is where most of the ceremony complaints actually come from. A team can adopt the command/query split on Monday and never touch an event store. Treat them as two separate decisions with two separate costs.'
      ]
    },
    {
      id: 3,
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
      id: 2,
      slug: 'background-jobs-at-scale',
      title: 'Background jobs at scale: Hangfire, Quartz.NET, and the idempotency problem',
      excerpt:
        'The scheduler is the easy part. The hard part is what happens when the same job fires twice across two instances of the same service.',
      author: 'Ragav Mohankumar',
      date: '2026-06-25',
      readTime: '6 min',
      tags: ['dotnet', 'infrastructure'],
      content: [
        'Hangfire, Quartz.NET, and Azure Functions timer triggers all solve the same first problem — run this on a schedule or after a delay — and none of them solve the second problem for you: what happens when two instances of the same service both think they own the job.',
        'Hangfire\'s SQL-backed storage gives you distributed locking almost for free, which is why it tends to win for teams already running SQL Server and wanting the least new infrastructure. Quartz.NET\'s clustering does the same job with more configuration and less opinion, which is the right trade when the shop is already invested in its provider model. Azure Functions sidesteps the question by making the platform own the scaling decision, at the cost of losing visibility into exactly when and where a job ran.',
        'None of that matters if the job itself is not idempotent, and this is where most retry storms actually start: a job times out after doing half its work, the scheduler retries it, and now a charge gets applied twice or an email goes out twice. The fix is not a better scheduler, it is a job that can safely run twice — an idempotency key checked before the side effect, not a shorter timeout.',
        'The debugging cost shows up in observability, not in the job itself. A failed job needs to say which instance ran it, which attempt number this was, and what the previous attempt did — without that, a retry storm looks identical to three unrelated failures, and nobody trusts the dashboard enough to stop paging on it.'
      ]
    },
    {
      id: 1,
      slug: 'first-entry',
      title: 'Starting a devLogs journal',
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
