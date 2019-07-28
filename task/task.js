// 创建一个插件，用于打印'task file with register.'
module.exports = function(grunt) {
    grunt.registerTask('task', function() {
        console.log('task file with register.');
    });
};