'use strict';
const faker = require('faker');
// const express = require( 'express' );
// const aws = require( 'aws-sdk' );
// const multerS3 = require( 'multer-s3' );
// const multer = require('multer');
const path = require( 'path' );
const url = require('url');
const keys = require('./../../config/aws.js');
const S3 = require('aws-sdk/clients/s3');

// const router = express.Router();

const s3 = new S3({
  accessKeyId: keys.key,
  secretAccessKey: keys.secretKey,
  Bucket: 'fec-songs',
  region: 'us-west-1'
 });

 var params = {
  Bucket: "fec-songs",
 };

 s3.listObjects(params, function(err, data) {
   if (err) {
      console.log(err, err.stack);
    } else {
      console.log(data);
    }
 });

// module.exports = {
//   up: (queryInterface, Sequelize) => {

//     let data = [];
//     let amount = 100;
//     while(amount--) {
//       data.push({
//         title: faker.commerce.color,
//         artist: faker.name.findName(),
//         liked: false,
//         cover: faker.image.imageUrl(),
//         length:,
//         song:
//       })
//     }
//     return queryInterface.bulkInsert('Songs', data, {});

//   },

//   down: (queryInterface, Sequelize) => {

//   }
// };
