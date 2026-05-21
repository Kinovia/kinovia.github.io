# Kinovia Coming Soon Website

A minimal one-page static website for GitHub Pages.

## Files

- `index.html` - main landing page
- `styles.css` - responsive Kinovia styling
- `script.js` - mailto-based interest registration
- `assets/kinovia-logo.png` - Kinovia logo
- `assets/favicon.png` - favicon

## Configure the email address

Open `script.js` and replace:

```js
const destinationEmail = "hello@kinovia.ai";
```

with the email address that should receive registration interest.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Go to **Settings > Pages**.
4. Under **Build and deployment**, choose:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`
5. Save.
6. GitHub will publish the website at your GitHub Pages URL.

## Custom GoDaddy domain

In GitHub Pages, add your custom domain. Then in GoDaddy DNS, point the domain to GitHub Pages using GitHub's recommended DNS records.
