## grunt学习笔记
grunt基础知识点，了解后，会简单的使用grunt做压缩等
### 基础知识
- Gruntfile.js
    - 配置或定义任务，加载Grunt插件
    - 包裹函数 module.exports = function(grunt) {};
### 知识应用
- grunt.config()
- grunt.initConfig({})
- grunt.file
    - grunt.file.read()
    - grunt.file.write()
    - grunt.file.delete()
    - grunt.file.copy()
- grunt.loadTasks() | grunt.task.loadTasks()
- grunt.loadNpmTasks()
- grunt.registerTask()
### 资料
- [插件](https://github.com/gruntjs)