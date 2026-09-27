// Bookshop catalogue — taken from "Books Write-Up (Updated)" supplied by the client.
// To add a book, copy an entry below. Fields:
//   id          – used in the page URL (/bookshop/<id>) — letters, numbers and hyphens only
//   title, author, description, price (whole Ksh)
//   image       – OPTIONAL cover image, e.g. "/images/books/my-book.jpg" (put the file in /public).
//                 If omitted, a typographic cover is generated automatically.
//   format      – OPTIONAL, e.g. "Paperback". Shown on the product page only when set.
export const books = [
  {
    id: "gikuyu-oral-literature",
    title: "Gìkūyū Oral Literature",
    author: "Wanjiku Kabira",
    price: 1000,
    description: "An introduction to the rich world of Gìkūyū oral expression—stories, songs, proverbs, riddles, sayings and other forms through which generations have preserved knowledge, values and memory.",
  },
  {
    id: "kikuyu-botanical",
    title: "Kikuyu Botanical",
    author: "Muruga Gacathi",
    price: 1800,
    description: "A fascinating guide to plants known and used by the Agìkūyū, opening a window into the relationship between people, plants, healing, food, environment and indigenous knowledge.",
  },
  {
    id: "kenda-muiyuru",
    title: "Kenda Mūiyūru",
    author: "Ngũgĩ wa Thiong’o",
    price: 1800,
    description: "A work that takes readers into Gìkūyū cultural knowledge and imagination, preserving ideas and expressions that connect language, memory and community life.",
  },
  {
    id: "african-religion",
    title: "African Religion: The Moral Tradition of Abundant Life",
    author: "Laurenti Magesa",
    price: 1700,
    description: "An exploration of African religious thought as a moral and communal way of life, showing how spirituality, relationships, responsibility and the pursuit of well-being are deeply interconnected.",
  },
  {
    id: "what-is-not-sacred",
    title: "What Is Not Sacred: African Spirituality",
    author: "Laurenti Magesa",
    price: 2400,
    description: "A thought-provoking examination of African religion and morality that invites readers to reconsider what African communities have traditionally understood as sacred, meaningful and life-giving.",
  },
  {
    id: "1000-gikuyu-proverbs",
    title: "1,000 Gìkūyū Proverbs",
    author: "G. Barra",
    price: 800,
    description: "A collection of one thousand Gìkūyū proverbs offering memorable windows into wisdom, humor, relationships, character and the practical philosophy of everyday life.",
  },
  {
    id: "the-kikuyu-people",
    title: "The Kikuyu People",
    author: "E. Mugo",
    price: 500,
    description: "An accessible account of the Agìkūyū people and their cultural world, offering readers an opportunity to encounter aspects of their history, traditions and social life.",
  },
  {
    id: "the-perfect-nine",
    title: "The Perfect Nine",
    author: "Ngũgĩ wa Thiong’o",
    price: 3200,
    description: "Ngũgĩ wa Thiong’o reimagines the Gìkūyū origin story through an epic poetic journey centered on Gìkūyū and Mūmbi’s nine daughters and their descendants.",
  },
  {
    id: "kariuki-na-muthoni",
    title: "Kariūki na Mūthoni",
    author: "B. B. Gecaga",
    price: 500,
    description: "A Gìkūyū-language story that brings language and imagination together, making it a valuable read for learners, families and anyone interested in experiencing Gìkūyū through storytelling.",
  },
  {
    id: "ngano-15-cia-ugikuyu",
    title: "Ng'ano 15 cia Ūgìkūyū",
    author: "Kenya Literature Bureau",
    price: 500,
    description: "Fifteen Gìkūyū stories gathered into one collection, offering young and older readers an enjoyable way to encounter traditional storytelling, language, humor and cultural wisdom.",
  },
  {
    id: "rugendo-rwa-mugendi",
    title: "Rūgendo rwa Mūgendi",
    author: "John Bunyan",
    price: 800,
    description: "A Gìkūyū literary journey that invites readers to follow the experiences of its characters while encountering the richness, rhythm and expressive power of the Gìkūyū language.",
  },
  {
    id: "african-civilization",
    title: "African Civilization",
    author: "Kihumbu Thairū",
    price: 800,
    description: "A wide-ranging reflection on African civilization, knowledge and heritage that encourages readers to look beyond colonial interpretations and engage seriously with Africa's intellectual and cultural contributions.",
  },
  {
    id: "kikuyu-folktales",
    title: "Kikuyu Folktales",
    author: "Rose Mwangi",
    price: 800,
    description: "A collection that preserves the imaginative world of Gìkūyū storytelling, where animals, people, ancestors, nature and everyday life become vehicles for teaching, entertainment and reflection.",
  },
  {
    id: "african-religions-in-the-diaspora",
    title: "African Religions in the Diaspora",
    author: "Opot p Bitek",
    price: 900,
    description: "An exploration of how African religious ideas, practices and identities have travelled beyond the continent and continued to shape communities and spiritual life across the diaspora.",
  },
  {
    id: "kirira-kia-ugikuyu",
    title: "Kīrīra kìa Ūgìkūyū",
    author: "M.N. Kabetu",
    price: 800,
    description: "A valuable work for readers seeking to encounter Gìkūyū cultural knowledge through the language itself, preserving expressions and ideas that carry memories of an earlier social and spiritual world.",
  },
  {
    id: "swords-of-kirinyaga",
    title: "Swords of Kirinyaga: The Fight for Land and Freedom",
    author: "H. K. Wachanga",
    price: 800,
    description: "A look into Africa's history through the symbolism, craftsmanship and use of swords and other weapons, highlighting their place within societies, leadership, warfare and cultural identity.",
  },
  {
    id: "the-southern-kikuyu",
    title: "The Southern Kikuyu, Volumes 1–3",
    author: "Louis Leakey",
    price: 24000,
    description: "A major ethnographic record of the Agìkūyū of southern Kenya, offering detailed documentation of social organization, beliefs, customs, rituals and everyday life. An important reference for anyone researching Gìkūyū culture and history.",
  },
  {
    id: "urathi-wa-cege-wa-kibiru",
    title: "Ūrathi wa Cege wa Kībĩrū",
    author: "D. Kinuthia Mugia",
    price: 700,
    description: "A work centered on the prophetic traditions associated with Cege wa Kībĩrū, opening a window into Gìkūyū ideas about prophecy, memory, history and the interpretation of events.",
  },
  {
    id: "tapestry-of-menopause",
    title: "A Tapestry of Menopause Among Traditional Agìkūyū Women",
    author: "Wanjiru Kamau",
    price: 2400,
    description: "A thoughtful exploration of menopause through the lived experiences and oral testimonies of traditional Agìkūyū women. The book brings together culture, womanhood, reproduction and indigenous knowledge, revealing how the transition into menopause was understood and valued within Agìkūyū society.",
  },
  {
    id: "concepts-of-god-in-africa",
    title: "Concepts of God in Africa",
    author: "John Mbiti",
    price: 3200,
    description: "Mbiti’s Concepts of God in Africa explores African understandings of God as the Supreme Creator, Sustainer and Ruler of the universe, examining how different African communities express God’s nature, attributes and relationship with human beings through their languages, beliefs, prayers, stories and rituals.",
  },
];
