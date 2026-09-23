# Agìkūyū Women & Men — website

Astro site built from the client's documents (*About Us* and *Books Write-Up*).

## Pages

| URL | Content |
|---|---|
| `/` | Home |
| `/about` | About Us — mission, who we are, why this matters |
| `/bookshop` | Bookshop — 20 titles, "What You Can Find", How to Purchase |
| `/bookshop/<id>` | One product page per book |
| `/our-work` | Research, Knowledge & Publications · Heritage, Documentation & Partnerships · Cultural Projects |
| `/language` | Gìkūyū Language Initiative — levels, three intakes a year, current intake |
| `/partner` | Sponsor Our Research · Donate · Partner with Us |
| `/contact` | Contact details, social accounts and the contact form |

## Where to edit things

- **Phone, WhatsApp, email, contact person, social accounts** → `src/data/site.js`
  (one number is used for every call and WhatsApp link).
  Social entries with an empty `url` show as plain text — paste the full profile link to make them clickable.
- **Books** → `src/data/books.js`. Add `image: "/images/books/<file>.jpg"` (file in `public/`) to show a real
  cover; without it a typographic cover is generated. Add `format: "Paperback"` to show a Format row on the product page.
- **Next language intake** → `src/pages/language.astro` ("Next intake is …").
- **Contact form topics** → `CONTACT_TOPICS` in `src/data/site.js`.

## How orders and enquiries work right now

There is **no online checkout and no form server**. "Order via WhatsApp" on each book page and the
contact form both open WhatsApp with a ready-made message to the number in `site.js`.
The client's document describes M-Pesa and Visa card payments on the website — that needs a payment
provider and a small backend and has not been built.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Notes

- `public/images/six.png` is a screenshot of a design mockup, not a page image; it is no longer used on the site.
- `public/images/one.jpg` and `eight.jpg` are identical files.
- Photos `fourteen.jpg`, `fifteen.jpg` and `sixteen.jpg` are stored sideways and are not used.
- `two.jpg` and `three.jpg` are ~5 MB each and are not used; resize before using them on a page.
