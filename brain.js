const brain = require('brain.js');

// Create a simple neural network
const net = new brain.NeuralNetwork();

// Train the network
net.train([
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]);

// Test the network
const output = net.run([1, 0]);
console.log(output); // Output should be close to 1
