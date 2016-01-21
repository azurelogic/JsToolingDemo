module.exports = function (config) {
    'use strict';
    config.set({
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['mocha'],
        browsers: ['PhantomJS'],

        files: [
            //remember to load your modules first!
            'Scripts/angular.js',
            'Scripts/angular-mocks.js',
            'Content/**/*.js',
            'Tests/**/*.js'
        ]
    });
};