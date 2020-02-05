module.exports = function (grunt) {  
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);  
    // Project configuration.  
    grunt.initConfig({  
        pkg: grunt.file.readJSON('package.json'),  
        cssmin: {  
            sitecss: {  
                options: {  
                    banner: '/* GdP minified css file */'  
                },  
                files: {  
                    'dist/css/style.min.css': [  
                        'assets/bootstrap/css/bootstrap.min.css',  
                        'assets/fonts/font-awesome.min.css',
                        'assets/css/styles.css',  
                        ]  
                }  
            }  
        },  
        uglify: {  
            options: {  
                compress: true ,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' 
            },  
            applib: {  
                src: [  
                'assets/js/jquery.min.js',  
                'assets/js/countdown.js',   
                ],  
                dest: 'dist/js/script.js'  
            }  
        },
        htmlmin: {                                     // Task
            dist: {                                      // Target
              options: {                                 // Target options
                removeComments: true,
                collapseWhitespace: true
              },
              files: {                                   // Dictionary of files
                'index.html': 'coming.html',     // 'destination': 'source'
              }
            },
          }  

    });  
    // Default task.  
    grunt.registerTask('default', ['uglify', 'cssmin']);  
};