//Keep the  data inside of an Array
const questions = [
  { id: 0, name: "Product1", type: "ikea" },
  { id: 1, name: "Band1", type: "metal" }
];

//Export the Array
module.exports = {
  getQuestions: () => {return questions},
  getQuestion: (id) => {return questions[id]},
};