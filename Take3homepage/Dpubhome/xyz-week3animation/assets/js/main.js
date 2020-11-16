$(document).ready(function(){

var word1 = [
	"extremely",
	"awkwardly",
	"optimistically",
	"unbearably"
];

var randomWord1 = word1[Math.floor(Math.random()*word1.length)];

var word2 = [
  "depressing",
  "hormonal",
  "reflective",
  "whimsical"
];

var randomWord2 = word2[Math.floor(Math.random()*word2.length)];

var word3 = [
  "a hint",
  "an indication",
  "a suggestion",
  "an inkling"
];

var randomWord3 = word3[Math.floor(Math.random()*word3.length)];

var word4 = [
  "Hemingway",
  "Orwell",
  "Austen",
  "Shakespeare"
];

var randomWord4 = word4[Math.floor(Math.random()*word4.length)];

$( ".word1" ).html(randomWord1);
$( ".word2" ).html(randomWord2);
$( ".word3" ).html(randomWord3);
$( ".word4" ).html(randomWord4);

});