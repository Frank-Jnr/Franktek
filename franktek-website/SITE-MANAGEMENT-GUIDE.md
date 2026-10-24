# Franktek Website — Site Management Guide

This guide explains how to update the site yourself, in plain language — no coding experience required for most of it. Keep this file for reference.

## 1. What you're getting

Three pages that make up the whole site:
- `index.html` — Home page
- `about.html` — About page
- `services.html` — Services page

Plus supporting folders:
- `css/styles.css` — all the site's design/colors/fonts in one file
- `js/main.js` — the mobile menu and the quote form's "send" behavior
- `assets/logo/` — your logo files (all six versions you provided) and generated favicons
- `assets/fonts/` — the Milker font, converted for web use
- `assets/images/pattern.svg` — the small triangle pattern used as a decorative accent
- `sitemap.xml` and `robots.txt` — help Google find and index your pages

**Important note on photos:** every photo currently on the site is a free, properly-licensed stock photo from Pexels, loaded directly from Pexels' own servers (not stored in your files). This was the agreed approach for launch. They will display normally for any visitor — open any page in a browser with a normal internet connection and you'll see them. When you're ready to swap in real project/team photos, see Section 3.

## 2. How to open and preview the site

Before it's hosted anywhere, you can preview it right now: find the folder, and double-click `index.html` — it opens in your default browser. Click through About and Services from the menu to check everything. This works with no internet needed for the layout, text, and logo — only the stock photos need an internet connection to load, since they're pulled from Pexels.

## 3. Editing text and images

Every page is a plain text file you can open with any basic text editor (Notepad, TextEdit, or better, a free one called Notepad++ or VS Code). Find the words you want to change, edit them, save, refresh the browser.

**To swap a photo:** find the `<img src="...">` tag with the old photo's web address inside the quotes (or the `background-image:url('...')` for the hero), and replace the address with the new one. If your new photo is a file on your computer rather than a web address:
1. Copy your photo file into the `assets/images/` folder.
2. Replace the old address with `assets/images/your-file-name.jpg`.

Do this for the hero photo, the About photo, the 5 service photos, and the 6 project photos, whenever you have real ones ready.

## 4. Updating contact details

Your phone numbers and email currently appear in several places: the header WhatsApp button, the hero, the mid-page CTA section, the sticky mobile bar, and the footer — on all three pages. If a number or email ever changes, you'll need to update it everywhere it appears. Use your text editor's **Find and Replace** across all three HTML files to do this quickly and consistently, rather than hunting manually.

The WhatsApp links are built as `https://wa.me/2348069330853?text=...` — the digits right after `wa.me/` are the number (country code, no plus sign, no spaces).

## 5. Connecting the quote form (currently not sending anywhere)

The "Request a Free Quote" form is fully built but deliberately left disconnected, as agreed, since you're handling the backend later. Here's how to switch it on when you're ready:

1. Go to **web3forms.com** and enter the email address you want quote requests sent to (`franktekengineeringltd@gmail.com`, or a different one).
2. They'll email you a free **Access Key** — no account or payment needed.
3. Open `js/main.js` in a text editor.
4. Find this line near the top of the form-handling section:
   `var WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";`
5. Replace the text between the quotes with your real key.
6. Save the file. That's it — no other changes needed, and this same key powers the form on all three pages.

Until you do this, anyone who submits the form will see a polite message pointing them to WhatsApp instead, so no inquiry is silently lost.

## 6. Certifications section

The COREN, SON, and CAC badges are shown as clean placeholder badges (not scans of your actual certificates) since the real documents are currently physical-only. When you have digital copies:
1. Save each certificate as an image (a phone photo or scan works — save as `.jpg` or `.png`).
2. Place them in `assets/images/`.
3. In `index.html`, find the "Certified & Compliant" section and swap the placeholder badge markup for an `<img>` tag pointing at your saved file, similar to the photo instructions in Section 3.
4. The CAC badge has room for your registration/RC number next to it whenever you'd like to add it — just type it into the badge text.
5. Once ISO 9001 is complete, change its badge from the dashed "in progress" style to match the other three (copy the COREN badge's HTML and swap the label).

## 7. Adding or editing an FAQ

Each question lives inside a `<details class="faq-item">...</details>` block on the Home page. Copy an existing block, paste it where you want the new one, and change the question (inside `<summary>`) and answer (inside the `<p class="faq-answer">`) text. No JavaScript is involved — this works automatically.

## 8. Getting the site online (once you have a domain)

You mentioned you don't own **franktekengineering.com** yet. Two separate things need to happen before the site is live to the public:
1. **Buy the domain** — through any registrar (Namecheap, GoDaddy, or a Nigerian option like Whogohost or Truehost).
2. **Get web hosting** and upload these files to it — hosting is usually bought from the same registrar, or separately.

As agreed, this guide doesn't walk through those steps yet — ask me for a dedicated domain-and-hosting walkthrough whenever you're ready, and I'll add it here.

## 9. SEO — what's already done, and what to check later

Already built in:
- Unique title and description for each page
- Social preview tags (so links look good when shared on WhatsApp, Facebook, etc.)
- Structured data (helps Google understand what the business is and does)
- `sitemap.xml` and `robots.txt`

Once the real domain is live:
1. Double-check every file for the placeholder domain `franktekengineering.com` — if you end up with a different final domain, replace it everywhere (title tags won't need this, but canonical links, `sitemap.xml`, and the `og:url`/`og:image` tags in each page's `<head>` do).
2. Submit `sitemap.xml` to Google Search Console (free) so Google finds your pages faster.

## 10. Things you may want to add later

- Real project photos and case studies (once available) in place of the illustrative "Project Snapshots"
- A scanned/digital version of your certificates
- Google Analytics, if you want visitor statistics (a small snippet gets added to each page's `<head>` — ask me when you're ready)
- A Careers page, if you take on hiring in the future

If anything in this guide is unclear or you'd like a change made for you rather than doing it yourself, just come back and ask.
