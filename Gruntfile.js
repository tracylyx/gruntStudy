module.exports = function(grunt) {
    // ====== file
    // grunt.file.write('text.js', 'grunt to new a file');
    // grunt.file.delete('./text');

    // ====== task
    // grunt.task.registerTask('task', function() {
    //     console.log('grunt task');
    // });
    // // grunt taskWithParam:paramInputHere
    // grunt.task.registerTask('taskWithParam', function(arg) {
    //     console.log('grunt task: ' + arg);
    // });
    // grunt.task.registerTask('taskWithDescription', 'description task', function(arg) {
    //     console.log('grunt task: ' + arg);
    // });

    // ===== grunt plugin
    // grunt.loadTasks('task'); // 加载task任务
    // grunt.registerTask('default', ['task']); 
    
    // step1 初始化配置对象
    grunt.initConfig({
        htmlmin: { // task
            firstTarget: { // target
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'dest/index.html': 'src/index.html'
                }
            }
        },
        cssmin: {
            firstTarget: {
                options: {
                    mergeIntoShorthands: false,
                    roundingPrecision: -1
                },
                files: {
                    'dest/base.css': 'src/base.css'
                }
            }
        },
        uglify: {
            firstTarget: {
                files: {
                    "dest/index.min.js": ["src/*.js"]
                }
            }
        },
        watch: {
            firstTarget: {
                files: 'src/index.js',
                tasks: 'task' // watch时 执行此任务
            }
        }
    });
    // step2 加载grunt插件
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // step3 执行插件
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'watch']);

    grunt.registerTask('task', ['uglify'])
};