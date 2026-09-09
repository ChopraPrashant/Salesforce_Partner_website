# Deploying Cubitous Web

The site is configured for Netlify with `https://www.cubitous.com` as its
primary URL. The apex domain, `https://cubitous.com`, will redirect to `www`.
Netlify's Free plan permits commercial projects and is sufficient for this
static website within its monthly usage limit.

## 1. Push the production configuration

Commit and push the current changes to the `main` branch of
`ChopraPrashant/Salesforce_Partner_website`.

## 2. Import the GitHub repository into Netlify

1. Sign in at https://app.netlify.com using GitHub.
2. Select **Add new project > Import an existing project**.
3. Choose GitHub and authorize access to
   `ChopraPrashant/Salesforce_Partner_website`.
4. Select the repository and confirm the production branch is `main`.
5. Netlify will read `netlify.toml`. Confirm:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node.js version: `22`
6. Select **Deploy**.

No environment variables are required.

## 3. Add the custom domain in Netlify

1. Open the new project and go to **Domain management**.
2. Select **Add a domain you already own**.
3. Add `www.cubitous.com`.
4. Keep `www.cubitous.com` as the primary domain. Netlify should also list
   `cubitous.com` and redirect it automatically to the primary domain.
5. Note the generated project hostname, such as
   `your-project-name.netlify.app`.

## 4. Update only the web records in GoDaddy

Open GoDaddy's DNS management page for `cubitous.com`.

1. Replace the existing `A` record for host `@` (currently
   `184.168.98.244`) with `75.2.60.5`.
2. Replace the existing `CNAME` record for host `www` (currently pointing to
   `cubitous.com`) with the exact `your-project-name.netlify.app` hostname
   shown by Netlify.
3. Remove any additional `A` or `AAAA` records for host `@`; conflicting
   records can prevent HTTPS certificate creation.
4. Keep the default TTL, or use 30 minutes if GoDaddy offers it.

Do **not** delete or alter MX, TXT, SPF, DKIM, DMARC, or Autodiscover records.
Those records operate the existing Microsoft 365 email service.

## 5. Verify the launch

DNS changes can take a few minutes to 48 hours, although they are usually
visible much sooner.

After Netlify reports **Netlify DNS verified** and provisions HTTPS:

1. Open `https://www.cubitous.com` and confirm the site loads securely.
2. Open `https://cubitous.com` and confirm it redirects to the `www` URL.
3. Visit `https://www.cubitous.com/robots.txt`.
4. Visit `https://www.cubitous.com/sitemap-index.xml`.
5. Test navigation, mobile layout, contact email links, and the careers form.

Netlify provisions and renews the TLS certificate automatically. Future pushes
to the `main` branch will automatically build and publish the production site.
