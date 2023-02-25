# Next.js Starter with integrated Sanity Studio

I found myself manually creating merging Next.JS and Sanity projects and debugging many of the same issues each time. I created this starter with the latest [Next.js][nextjs] (frontend) and [Sanity][sanity-website] (content backend) to quickstart my next sanity project. I've debugged the dependencie errors once and for all, though some warnings may still exist. 

Sanity Studio offers an amazing content editing experience for my ManifestFTS clients such as  instant side-by-side content previews, really real-time collaboration, and human-error handling build it. It also offers an equaly awesome software engineering experience and the ability to engineer custom admin interfaces using [Sanity Structure Builder][sanity-structure-builder]

Sanity Studio connects directly to [Content Lake][sanity-content-lake], where content is stored. Once your Sanity project is deploy this means real-time editing of production content with your local development environment.
Enjoy this Next.JS Sanity starter with ready-to-go ecommerce and blog [structure/schemas?][sanity-schema-types] and let me know what you think.


> **TLDRQ (The low-down right quick!**
>
> During installation I opted for the following: TypeScript (yes), src directory (no), I prefer `/pages` for Next.js routing.
>
> Experimental [/app][app-dir] directory = (no) I use this starter for production sites. Feel free to help update this repo once Vercel announces the app directory is ready for production.

## Sanity CLI

You should already have [Sanity CLI][sanity-cli] setup and your own Project ID and API Token 

## Quickstart

Clone the repo or download the zip file manally and extract into a new root project directory

```bash
git clone git@github.com:Manifest-FTS/next-sanity.git
```

Install packages

```bash
pnpm i or npm i
```

Update your Sanity Config files (sanity.cli.ts and sanity.config.ts) with your project ID and API token. Then start it up!

```bash
pnpm dev or npm dev (for Next.JS)
pnpm sdev or npm sdev (for Sanity)
```

## Credits & Thank You's

- [Sanity's helpful Slack Community ][sanity-community]
- [Cody Olsen's Next/Sanity README file][cody]


[cody][https://www.sanity.io/exchange/community/stipsan]
[sanity-cli]: https://www.sanity.io/docs/getting-started-with-sanity-cli
[nextjs]: https://github.com/vercel/next.js
[sanity-content-lake]: https://www.sanity.io/docs/datastore
[sanity-website]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-structure-builder]: https://www.sanity.io/docs/structure-builder-introduction
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory