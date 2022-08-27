module.exports = "Phrase;"

// Adds 'reverse' to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}


// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // this.processor = function(string) {
  //   return string.toLowerCase();
  // }

  this.processedContent = function processedContent() {
    return this.content.toLowerCase();
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
