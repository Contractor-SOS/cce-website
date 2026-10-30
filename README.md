# crowncityexteriors.com

Crown City Exteriors' website, rebuilt from the GoDaddy site captured on Oct 29, 2026. Plain HTML and CSS on Cloudflare Pages, edited through SEED.

| Branch | Serves |
| --- | --- |
| `main` | The live site: crowncityexteriors.com and www (after the move to Cloudflare) |
| `preview` | preview.crowncityexteriors.com, which search engines are told to skip |

Every change goes to `preview` first. Going live is merging `preview` into `main` after Steven approves in SEED.

## Notes for this site

- **Booking form:** /booking-form embeds the DripJobs form `https://crowncityexteriors.dripjobs.com?f=Start-Your-New-Chapter`. Keep the iframe exactly as it is.
- **SMS terms:** /sms-terms-and-conditions-1 and /privacy-policy keep their old addresses because CCE's texting registration may point at them. /sms-terms-and-conditions redirects to the first.
- **Photos:** New Chapters is waiting for CCE's own project photos.
- **Search Console:** the homepage keeps the old `google-site-verification` meta tag.
- **Old site record:** kept in the private `site-archive` repo.

This repo is public: never commit passwords, API keys or tokens. Rules for Claude are in `CLAUDE.md`. Shared workflows live in `Contractor-SOS/site-tools`.
