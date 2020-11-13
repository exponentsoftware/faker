let faker = require('./faker.js');
const { mobile } = require('./faker.js/lib/locales/en/index.js');
// const { mobile } = require('./faker.js/lib/mobile.js');
const Music = require('./faker.js/lib/music.js');
// import {faker} from './index.js'

// let name = faker.name.findName();

// var faker = require('faker');

// var randomName = faker.name.findName();
var music = faker.music.genre();
var Mobile = faker.mobile.brand();

// console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));

// console.log('hello word', randomName)
// console.log('music from lib import ', Music)
console.log('music from check:-', music)
console.log('mobile from check:-', Mobile)
// console.log('mobile from lib locals', mobile)


