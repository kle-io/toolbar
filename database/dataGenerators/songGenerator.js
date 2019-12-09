/*

***** COMMENTED OUT TO PREVENT AWS CHARGES *****

'use strict';
const faker = require('faker');
const keys = require('./../../config/aws.js');
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs');
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfprobePath(ffprobePath);

const s3 = new S3({
  accessKeyId: keys.key,
  secretAccessKey: keys.secretKey,
  Bucket: 'fec-songs',
  region: 'us-west-1'
});

var params = {
  Bucket: 'fec-songs',
};

const songUrls = [];
const pictureUrls = [];
const songData = [];

// retrieving each song duration
const timeLengths = (callback) => {
  const durations = songUrls.map((url) => {
    const promise = new Promise((resolve, reject) => {
      ffmpeg.ffprobe(url, (err, metadata) => {
        if (err) {
          console.log('error in duration promise creation');
          reject(err);
        } else {
          resolve(metadata.format.duration);
        }
      });
    });
    return promise.then((data) => data);
  });
  return Promise.all(durations);
};

// Passes song duration into sample data
const sample = (callback) => {
  timeLengths()
    .then((durations) => {
      callback(durations);
    })
    .catch((err) => {
      callback(err);
    });
};

var promise = new Promise((resolve, reject) => {
  s3.listObjects(params, function (err, data) {
    if (err) {
      console.log('error in retreiving data from Amazon s3');
    } else {
      let song = data.Contents;
      for (var i = 0; i < song.length; i++) {
        if (i < 101) {
          pictureUrls.push(`https://fec-songs.s3-us-west-1.amazonaws.com/${song[i].Key}`);
        } else {
          songUrls.push(`https://fec-songs.s3-us-west-1.amazonaws.com/${song[i].Key}`);
        }
      }
      songUrls.shift();
      pictureUrls.shift();
      resolve();
    }
  });
});

promise.then(() => {
  sample((durations) => {
    for (var i = 0; i < 100; i++) {
      songData.push({
        title: faker.commerce.color(),
        artist: faker.name.findName(),
        liked: false,
        cover: pictureUrls[i],
        song: songUrls[i],
        duration: durations[i]
      });
    }
    fs.writeFile('songs.json', JSON.stringify(songData), function (err) {
      if (err) {
        console.log('error in writing file with sample data');
        throw err;
      } else {
        console.log('saved!');
        console.log(songUrls.length);
        console.log(pictureUrls.length);
      }
    });
  });
});

*/