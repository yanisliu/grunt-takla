module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n' +
                ' * <%= pkg.desc %>\n' +
                ' * @pageName <%= pkg.pageName %>\n' +
                ' * @widgetName <%= pkg.widgetName %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @date <%= grunt.template.today("yyyymmdd") %>\n' +
                ' */\n',
        bannerJs: '/*merge start*/\n' +
                  '(function(){\n' +
                  '    ImportJavscript = {\n' +
                  '        url:function(url){\n' +
                  '            document.write("<script type=\"text/javascript\" src=\""+url+"\"></scr"+"ipt>");\n' +
                  '        }\n' +
                  '    }\n' +
                  '})();\n' +
                  '/*!!cmd:compress=true*/\n' +
                  '/*!!cmd:conv2unicode=true*/\n' +
                  '/*!!cmd:jsCompressOpt=["--disable-optimizations"]*/\n' +
                  '/*merge end*/\n\n' +
                  'ImportJavscript.url(\'http://style.c.aliimg.com/app/dsc/js/takla/widget/original/<%= pkg.widgetName %>/default/<%= pkg.widgetName %>.js\');',
        bannerCss: '/*!!cmd:compress=true*/\n' +
                   '/*!!cmd:conv2unicode=true*/\n\n' +
                   '@import url("http://style.c.aliimg.com/app/dsc/css/takla/widget/original/<%= pkg.widgetName %>/default/<%= pkg.widgetName %>.css");',
        concat: {
            commonJs: {
                options: {
                    banner: '<%= banner %>' + '<%= bannerJs %>',
                    stripBanners: true
                },
                src: ['tmpl/tmpl.js'],
                dest: 'js/takla/widget/<%= pkg.pageName %>/<%= pkg.widgetName %>/<%= pkg.widgetName %>.js'
            },
            originalJs: {
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                },
                src: ['tmpl/tmpl.js'],
                dest: 'js/takla/widget/original/<%= pkg.widgetName %>/default/<%= pkg.widgetName %>.js'
            },
            commonCss: {
                options: {
                    banner: '<%= banner %>' + '<%= bannerCss %>',
                    stripBanners: true
                },
                src: ['tmpl/tmpl.css'],
                dest: 'css/takla/widget/<%= pkg.pageName %>/<%= pkg.widgetName %>/<%= pkg.widgetName %>.css'
            },
            originalCss: {
                options: {
                    banner: '<%= banner %>',
                    stripBanners: true
                },
                src: ['tmpl/tmpl.css'],
                dest: 'css/takla/widget/original/<%= pkg.widgetName %>/default/<%= pkg.widgetName %>.css'
            }
        }
    });

    // grunt.file.defaultEncoding = 'gbk';

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat']);

};
