#! /usr/bin/env node

var ArtifactoryAPI = require('./ArtifactoryAPI');

var program = require('commander');

function list(val) {
    return val.split(',');
}

program
    .version('1.0.0')
    .option('-u, --user [type]', 'artifactory user name')
    .option('-P, --password [type]', 'artifactory user password')
    .option('-a, --arti [type]', 'Add artifactory host name')
    .option('-r, --repo [type]', 'Add target repository name')
    .option('-p, --path <path>', 'Add the path in target repository')
    .option('-f, --files <items>', 'Add the specified files, comma separated', list)
    .parse(process.argv);

var artiAddress = String(program.arti);
var repo = String(program.repo);
var username = String(program.user);
var password = String(program.password);
var token = new Buffer(username + ':' + password).toString('base64');
// path must begin with '/' end with '/'
var path = '/' + String(program.path).replace(/^\/|\/$/g, '') + '/';
var filelist = program.files;

var artifactory = new ArtifactoryAPI(artiAddress, token);
// upload
for (var i in filelist) {
    artifactory.uploadFile(repo, path + filelist[i], filelist[i]).then(function (uploadInfo) {
        console.log('UPLOAD INFO IS: ' + JSON.stringify(uploadInfo));
    }).fail(function (err) {
        console.log('ERROR: ' + err);
    });
}