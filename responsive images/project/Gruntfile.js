module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            dev: {
                options: {
                    engine: 'im',
                    sizes: [{
                            name: 'cropped_750',
                            width: 750,
                            // height: 260,
                            // aspectRatio: false
                        },
                        // {
                        //     name: '750',
                        //     width: 750,
                        //     quality: 60
                        // },
                        // {
                        //     name: '1000',
                        //     width: 1000,
                        //     quality: 60
                        // }
                    ]
                },

                /*
                You don't need to change this part if you don't change
                the directory structure.
                */
                files: [{
                    expand: true,
                    src: ['*.{gif,jpg,png}'],
                    cwd: 'cropped_750/',
                    dest: 'images/'
                }]
            }
        },
        image_resize: {
            resize: {
                options: {
                    width: 450,
                    crop: true
                },
                src: 'images_src/*.jpg',
                dest: 'cropped_480/'
            },
            resize: {
                options: {
                    width: 750,
                    crop: true
                },
                src: 'images_src/*.jpg',
                dest: 'cropped_750/'
            }
        },

        /* Clear out the images directory if it exists */
        clean: {
            dev: {
                src: ['images'],
            },
        },

        /* Generate the images directory if it is missing */
        mkdir: {
            dev: {
                options: {
                    create: ['images']
                },
            },
        },

        /* Copy the "fixed" images that don't go through processing into the images/directory */
        copy: {
            dev: {
                files: [{
                    expand: true,
                    src: 'images_src/fixed/*.{gif,jpg,png}',
                    dest: 'images/'
                }]
            },
        },
    });
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-image-resize');
    grunt.registerTask('default', ['responsive_images']);

};