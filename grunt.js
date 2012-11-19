/*global module:false*/
module.exports = function (grunt) {

    grunt.initConfig({
        pkg:'<json:package.json>',
        meta:{
            banner:'/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author%>;' +
                ' Licensed <%= pkg.license %> */'
        },
        lint:{
            files:['grunt.js', 'src/**/*.js']
        },
        jasmine: {
            src:['src/tiddlymob.js'],
            specs: 'test/*Spec.js',
            timeout: 10000
        },
        concat:{
            dist:{
                src:['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
                dest:'dist/<%= pkg.name %>-<%= pkg.version %>.js'
            }
        },
        min:{
            dist:{
                src:['<banner:meta.banner>', '<config:concat.dist.dest>'],
                dest:'dist/<%= pkg.name %>-<%= pkg.version %>.min.js'
            }
        },
        watch:{
            files:['<config:lint.files>', '<config:jasmine.specs>'],
            tasks:'lint jasmine'
        },
        jshint:{
            options:{
                curly:true,
                eqeqeq:true,
                immed:true,
                latedef:true,
                newcap:true,
                noarg:true,
                sub:true,
                undef:true,
                boss:true,
                eqnull:true,
                browser:true
            },
            globals:{
                $:true,
                jQuery:true,
                console:true
            }
        }
    });

    grunt.registerTask('default', 'lint jasmine concat min');
    grunt.registerTask('test', 'jasmine');

    grunt.registerTask('update-tsapp', 'copy tsbar file to the tsapp for testing.', function () {

        this.requires('concat');
        grunt.file.copy('dist/tiddlymob-' + grunt.config('pkg.version') + '.js', 'tiddlymobapp/assets/tiddlymob.js');
    });

    grunt.loadNpmTasks('grunt-jasmine-runner');
};
