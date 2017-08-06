// Gruntfile.js

// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function (grunt) {

    // ===========================================================================
    // CONFIGURE GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({

        // get the configuration info from package.json ----------------------------
        // this way we can use things like name and version (pkg.name)
        pkg: grunt.file.readJSON('package.json'),
        // configure jshint to validate js files -----------------------------------


        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: [{
                    'dist/js/controllers/events.controller.min.js': [
                        'src/js/controllers/events.controller.js'
                    ]},
                    {
                    'dist/js/controllers/individual.controller.min.js': [
                        'src/js/controllers/individual.controller.js'
                    ]},
                    {
                    'dist/js/controllers/home.controller.min.js': [
                        'src/js/controllers/home.controller.js'
                    ]},
                    {
                        'dist/js/controllers/main.controller.min.js':[
                            'src/js/controllers/main.controller.js'
                        ]
                    },
					{
                        'dist/js/controllers/vr.controller.min.js':[
                            'src/js/controllers/vr.controller.js'
                        ]
                    },
                    {
                        'dist/js/gvApp.min.js': 'src/js/gvApp.js'
                    },
					{
                        'dist/js/lightbox.min.js': 'src/js/lightbox.js'
                    }
                ]
            }
        },
        less: {
            build: {
                files: {
                    'src/css/style.css': 'src/css/style.less'
                }
            }
        },
        watch: {
            scripts:{
                files: ['src/js/controllers/*.js', 'src/js/gvApp.js'],
                tasks: ['uglify'],

            },
            styleSheets:{
                files: ['src/css/*.css', 'src/css/*.less'],
                tasks: ['less', 'cssmin']
            }
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },

            // when this task is run, lint the Gruntfile and all js files in src
            build: ['grunfile.js', 'src/**/*.js']
        },
        cssmin:{
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build:{
                files: {
                    'dist/css/style.min.css': ['src/css/style.css'],
                    'dist/css/animate.min.css': "src/css/animate.css",
					'dist/css/lightbox.min.css': "src/css/lightbox.css"
                }
            }
        },
        
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'src/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif,svg}'],   // Actual patterns to match
                    dest: 'dist/'                  // Destination path prefix
                }]
            }
        }

    });

    grunt.registerTask('default', ['uglify', 'less', 'cssmin', 'imagemin']);

    //grunt.registerTask('dev', ['clean:dev','imagemin', 'copy', 'jshint',  'uglify', 'less', 'cssmin']);

    // only run production configuration
    //grunt.registerTask('prod', ['clean:prod', 'imagemin', 'copy', 'jshint', 'uglify', 'less', 'cssmin']);


    // ===========================================================================
    // LOAD GRUNT PLUGINS ========================================================
    // ===========================================================================
    // we can only load these if they are in our package.json
    // make sure you have run npm install so our app can find these
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');


};
