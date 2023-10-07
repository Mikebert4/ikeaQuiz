
const questions = [
  {
    name: "Ektorp",
    type: "ikea",
    description: "This is a product from Ikea",
    image: "https://www.ikea.com/us/en/images/products/ektorp-sofa-lofallet-beige__0719190_PE731620_S5.JPG?f=s"
  },
  {
    name: "LACK",
    type: "ikea",
    description: "A simple and affordable coffee table available in various colors.",
    image: "https://example.com/lack-coffee-table-image.jpg"
  },
  {
    name: "POÄNG",
    type: "ikea",
    description: "A comfortable and stylish armchair available in different finishes.",
    image: "https://example.com/poang-armchair-image.jpg"
  },
  {
    name: "ADILS",
    type: "ikea",
    description: "An affordable desk with a spacious tabletop and adjustable legs.",
    image: "https://example.com/linnmon-adils-desk-image.jpg"
  },
  {
    name: "KALLAX",
    type: "ikea",
    description: "A versatile shelving unit that can be used for storage or as a room divider.",
    image: "https://example.com/kallax-shelf-unit-image.jpg"
  },
  {
    name: "ALEX",
    type: "ikea",
    description: "A set of drawers for organizing office supplies or other items.",
    image: "https://example.com/alex-drawer-unit-image.jpg"
  },
  {
    name: "EKEDALEN",
    type: "ikea",
    description: "A dining table with extendable options for accommodating guests.",
    image: "https://example.com/ekedalen-dining-table-image.jpg"
  },
  {
    name: "RÅSKOG",
    type: "ikea",
    description: "A portable cart with multiple shelves, perfect for kitchen or bathroom storage.",
    image: "https://example.com/raskog-utility-cart-image.jpg"
  },
  {
    name: "Sigur Rós",
    type: "nordic",
    description: "An Icelandic post-rock band known for their ethereal soundscapes.",
    image: "https://example.com/sigur-ros-image.jpg"
  },
  {
    name: "Jónsi & Alex",
    type: "nordic",
    description: "An Icelandic ambient and experimental duo consisting of Jónsi Birgisson from Sigur Rós and Alex Somers.",
    image: "https://example.com/jonsi-alex-image.jpg"
  },
  {
    name: "Árstíðir",
    type: "nordic",
    description: "An Icelandic indie folk band known for their intricate vocal harmonies.",
    image: "https://example.com/arstidir-image.jpg"
  },
  {
    name: "Kauan",
    type: "nordic",
    description: "A Russian-Ukrainian-Finnish band that blends post-rock with elements of folk and black metal.",
    image: "https://example.com/kauan-image.jpg"
  },
  {
    name: "Wardruna",
    type: "nordic",
    description: "A Norwegian folk band that draws inspiration from Norse mythology and ancient rituals.",
    image: "https://example.com/wardruna-image.jpg"
  },
  {
    name: "Shining",
    type: "nordic",
    description: "A Swedish band that combines elements of jazz, black metal, and avant-garde music.",
    image: "https://example.com/shining-image.jpg"
  },
  {
    name: "Moonsorrow",
    type: "nordic",
    description: "A Finnish folk metal band with epic and atmospheric compositions.",
    image: "https://example.com/moonsorrow-image.jpg"
  },
  {
    name: "Oranssi Pazuzu",
    type: "nordic",
    description: "A Finnish band known for their psychedelic black metal sound.",
    image: "https://example.com/oranssi-pazuzu-image.jpg"
  }
];

//Export the Array
module.exports = {
  getQuestions: questions,
  getQuestion: (id) => {return questions[id];}
}