
const questions = [
  {
    "id": 0,
    "name": "EKTORP",
    "type": "ikea",
    "description": "This is a product from Ikea",
    "image": "ektorp.jpg"
  },
  {
    "id": 1,
    "name": "AGOTNES",
    "type": "ikea",
    "description": "This basic firm foam mattress is 10 cm high. Resilient foam is combined with a soft layer of wadding.",
    "image": "agotnes.jpg"
  },
  {
    "id": 2,
    "name": "POÄNG",
    "type": "ikea",
    "description": "A comfortable and stylish armchair available in different finishes.",
    "image": "poang.jpg"
  },
  {
    "id": 3,
    "name": "ADILS",
    "type": "ikea",
    "description": "An affordable desk with a spacious tabletop and adjustable legs.",
    "image": "adils.jpg"
  },
  {
    "id": 4,
    "name": "MALÖRTSMOTT",
    "type": "ikea",
    "description": "This soft chair pad adds a layer of warmth and cosiness to most types of seating, including benches. Sheepskin look and feel, but made from recycled polyester.",
    "image": "malortsmott.jpg"
  },
  {
    "id": 5,
    "name": "ALEX",
    "type": "ikea",
    "description": "A set of drawers for organizing office supplies or other items.",
    "image": "alex.jpg"
  },
  {
    "id": 6,
    "name": "BLÅSVERK",
    "type": "ikea",
    "description": "A lovely blue table lamp.",
    "image": "blasverk.jpg"
  },
  {
    "id": 7,
    "name": "RÅSKOG",
    "type": "ikea",
    "description": "A portable cart with multiple shelves, perfect for kitchen or bathroom storage.",
    "image": "raskog.jpg"
  },
  {
    "id": 8,
    "name": "BEHERIT",
    "type": "nordic",
    "description": "Beherit is a Finnish black metal band from Rovaniemi. The band was formed in 1989 by Nuclear Holocausto Vengeance, Black Jesus and Sodomatic Slaughter, with the purpose of performing \"the most primitive, savage, hell-obsessed black metal imaginable\". \"Beherit\" is the Syriac word for Satan.",
    "image": "beherit.jpg"
  },
  {
    "id": 9,
    "name": "MOKOMA",
    "type": "nordic",
    "description": "Mokoma is a Finnish thrash metal band formed in Lappeenranta, Finland, in 1996. Their music also has grindcore and death metal influences with traditional Finnish melancholy.",
    "image": "mokoma.jpg"
  },
  {
    "id": 10,
    "name": "MYRKUR",
    "type": "nordic",
    "description": "Myrkur is a Danish black metal band led by singer Amalie Bruun. Myrkur is a solo project within the genre of second-wave black metal. Initially, the real-life identity of the person behind the project was kept unknown.",
    "image": "myrkur.jpg"
  },
  {
    "id": 11,
    "name": "KAUAN",
    "type": "nordic",
    "description": "A Russian-Ukrainian-Finnish band that blends post-rock with elements of folk and black metal.",
    "image": "kauan.jpg"
  },
  {
    "id": 12,
    "name": "WARDRUNA",
    "type": "nordic",
    "description": "A Norwegian folk band that draws inspiration from Norse mythology and ancient rituals.",
    "image": "wardruna.jpg"
  },
  {
    "id": 13,
    "name": "KVELERTAK",
    "type": "nordic",
    "description": "Kvelertak is a Norwegian heavy metal band from Stavanger, formed in 2007. The group comprises vocalist Ivar Nikolaisen, guitarists Vidar Landa, Bjarte Lund Rolland and Maciek Ofstad, bassist Marvin Nygaard and drummer Håvard Takle Ohr.",
    "image": "kvelertak.jpg"
  },
  {
    "id": 14,
    "name": "GLITTERTIND",
    "type": "nordic",
    "description": "Glittertind is a Norwegian indie folk-rock band, which started up as a one-man project in 2001 featuring Torbjørn Sandvik as the driving force.",
    "image": "glittertind.jpg"
  },
  {
    "id": 15,
    "name": "SKALMÖLD",
    "type": "nordic",
    "description": "Skálmöld is a Viking / folk metal band from Reykjavík, Iceland, formed in August 2009. The band's name is literally translated as Age of Swords and also means \"lawlessness\", referring to the Age of the Sturlungs of Icelandic history, when a civil war broke out between the country's family clans",
    "image": "skalmold.jpg"
  },
  {
    "id": 16,
    "name": "ENSIFERUM",
    "type": "nordic",
    "country": "Finland",
    "image": "ensiferum.jpg",
    "description": "Ensiferum is a Finnish folk metal band formed in 1995. Their music is characterized by its use of traditional Finnish folk melodies and instruments, combined with heavy metal elements. Ensiferum is one of the most popular folk metal bands in the world, and has released eight studio albums to date."
  },
  {
    "id": 17,
    "name": "KORPIKLAANI",
    "type": "nordic",
    "country": "Finland",
    "image": "korpiklaani.jpg",
    "description": "Korpiklaani is another popular Finnish folk metal band. Their music is known for its upbeat and catchy melodies, as well as its use of accordions and other traditional Finnish instruments. Korpiklaani has released ten studio albums to date, and has toured extensively throughout the world."
  },
  {
    "id": 19,
    "name": "HEILUNG",
    "type": "nordic",
    "country": "Denmark",
    "image": "heilung.jpg",
    "description": "Heilung is a Nordic folk music group formed in 2014. Their music is inspired by the Viking Age, and features a variety of traditional instruments, including drums, horns, and chanting. Heilung has released two studio albums to date, and has toured extensively throughout Europe and North America."
  },
  {
    "id": 20,
    "name": "VALKYRIA",
    "type": "nordic",
    "country": "Norway",
    "image": "valkyria.jpg",
    "description": "Valkyria is a Norwegian folk metal band formed in 2013. Their music is characterized by its powerful vocals and heavy guitars, as well as its use of traditional Norwegian folk melodies. Valkyria has released two studio albums to date, and has toured extensively throughout Europe."
  },
  {
    "id": 23,
    "name": "VOLBEAT",
    "type": "nordic",
    "country": "Denmark",
    "image": "volbeat.jpg",
    "description": "Volbeat is a Danish heavy metal band formed in 2001."
  },
  {
    "id": 24,
    "name": "WARDIVA",
    "type": "nordic",
    "image": "wardiva.jpg",
    "description": "Wardriva is a Norwegian black metal band formed in 2010. Their music is characterized by its raw and atmospheric sound, as well as its themes of Norse mythology and paganism."
  },
  {
    "id": 25,
    "name": "STRANDMON",
    "type": "ikea",
    "image": "strandmon.jpg",
    "description": "The STRANDMON wing chair is a comfortable and stylish chair that is perfect for relaxing in. However, its name also sounds like a doom metal band. I imagine STRANDMON to be a band that plays slow and heavy doom metal with crushing guitars and mournful vocals."
  },
  {
    "id": 26,
    "name": "TÅNUM",
    "type": "ikea",
    "image": "tanum.jpg",
    "description": "The TÅNUM desk is a simple and functional desk that is perfect for any office or study. However, its name also sounds like a progressive metal band. I imagine TÅNUM to be a band that plays complex and technical progressive metal with soaring vocals and intricate guitar solos."
  },
  {
    "id": 27,
    "name": "FEJKA",
    "type": "ikea",
    "image": "fejka.jpg",
    "description": "The FEJKA artificial plant is a realistic-looking plant that is perfect for any room. However, its name also sounds like a black metal band. I imagine FEJKA to be a band that plays raw and atmospheric black metal with haunting vocals and dissonant guitars."
  }
];


//Export the Array
module.exports = {
  getQuestions: questions,
  getQuestion: (id) => {return questions[id];}
}