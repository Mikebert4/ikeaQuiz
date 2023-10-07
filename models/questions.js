
const questions = [
  {
    "name": "EKTORP",
    "type": "ikea",
    "description": "This is a product from Ikea",
    "image": "ektorp.jpg"
  },
  {
    "name": "AGOTNES",
    "type": "ikea",
    "description": "This basic firm foam mattress is 10 cm high. Resilient foam is combined with a soft layer of wadding.",
    "image": "agotnes.jpg"
  },
  {
    "name": "POÄNG",
    "type": "ikea",
    "description": "A comfortable and stylish armchair available in different finishes.",
    "image": "poang.jpg"
  },
  {
    "name": "ADILS",
    "type": "ikea",
    "description": "An affordable desk with a spacious tabletop and adjustable legs.",
    "image": "adils.jpg"
  },
  {
    "name": "MALÖRTSMOTT",
    "type": "ikea",
    "description": "This soft chair pad adds a layer of warmth and cosiness to most types of seating, including benches. Sheepskin look and feel, but made from recycled polyester.",
    "image": "malortsmott.jpg"
  },
  {
    "name": "ALEX",
    "type": "ikea",
    "description": "A set of drawers for organizing office supplies or other items.",
    "image": "alex.jpg"
  },
  {
    "name": "BLÅSVERK",
    "type": "ikea",
    "description": "A lovely blue table lamp.",
    "image": "blasverk.jpg"
  },
  {
    "name": "RÅSKOG",
    "type": "ikea",
    "description": "A portable cart with multiple shelves, perfect for kitchen or bathroom storage.",
    "image": "raskog.jpg"
  },
  {
    "name": "BEHERIT",
    "type": "nordic",
    "description": "Beherit is a Finnish black metal band from Rovaniemi. The band was formed in 1989 by Nuclear Holocausto Vengeance, Black Jesus and Sodomatic Slaughter, with the purpose of performing \"the most primitive, savage, hell-obsessed black metal imaginable\". \"Beherit\" is the Syriac word for Satan.",
    "image": "beherit.jpg"
  },
  {
    "name": "MOKOMA",
    "type": "nordic",
    "description": "Mokoma is a Finnish thrash metal band formed in Lappeenranta, Finland, in 1996. Their music also has grindcore and death metal influences with traditional Finnish melancholy.",
    "image": "mokoma.jpg"
  },
  {
    "name": "MYRKUR",
    "type": "nordic",
    "description": "Myrkur is a Danish black metal band led by singer Amalie Bruun. Myrkur is a solo project within the genre of second-wave black metal. Initially, the real-life identity of the person behind the project was kept unknown.",
    "image": "myrkur.jpg"
  },
  {
    "name": "KAUAN",
    "type": "nordic",
    "description": "A Russian-Ukrainian-Finnish band that blends post-rock with elements of folk and black metal.",
    "image": "kauan.jpg"
  },
  {
    "name": "WARDRUNA",
    "type": "nordic",
    "description": "A Norwegian folk band that draws inspiration from Norse mythology and ancient rituals.",
    "image": "wardruna.jpg"
  },
  {
    "name": "KVELERTAK",
    "type": "nordic",
    "description": "Kvelertak is a Norwegian heavy metal band from Stavanger, formed in 2007. The group comprises vocalist Ivar Nikolaisen, guitarists Vidar Landa, Bjarte Lund Rolland and Maciek Ofstad, bassist Marvin Nygaard and drummer Håvard Takle Ohr.",
    "image": "kvelertak.jpg"
  },
  {
    "name": "GLITTERTIND",
    "type": "nordic",
    "description": "Glittertind is a Norwegian indie folk-rock band, which started up as a one-man project in 2001 featuring Torbjørn Sandvik as the driving force.",
    "image": "glittertind.jpg"
  },
  {
    "name": "SKALMÖLD",
    "type": "nordic",
    "description": "Skálmöld is a Viking / folk metal band from Reykjavík, Iceland, formed in August 2009. The band's name is literally translated as Age of Swords and also means \"lawlessness\", referring to the Age of the Sturlungs of Icelandic history, when a civil war broke out between the country's family clans",
    "image": "skalmold.jpg"
  }
];

//Export the Array
module.exports = {
  getQuestions: questions,
  getQuestion: (id) => {return questions[id];}
}