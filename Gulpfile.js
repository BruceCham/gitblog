/**
 * 健康呵护项目的构建配置
 * @author xujia624
 * @date 2015-01-10
 */
var fs = require('fs');
var gulp = require("gulp"),
    gulpLoadPlugins = require('gulp-load-plugins'),
    plugins = gulpLoadPlugins(),
    requirejs = require('requirejs');

var through = require('through2');

var pkg = require('load-pkg'),
    developDir = './src/',
    dateVersionName = 'v' + pkg.dateVersion,
    productDir = './' + dateVersionName + '/';

var htmlFiles = developDir + 'page/**/*.html',
    mergeLessFiles = developDir + '**/*-merge.less',
    lessFiles = developDir + '**/*.less',
    mergeCssFiles = developDir + '**/*-merge.css',
    cssFiles = developDir + '**/*.css';

// 清理生产目录
gulp.task("clean", function(cb) {
    return gulp.src(productDir, {read: false}).pipe(plugins.rimraf());
});

// 建构生产目录
gulp.task('build', ['clean'], function(){
    gulp.src(htmlFiles).pipe(gulp.dest(productDir+'page/'));

    gulp.src([developDir+'library/*/*.js',developDir+'library/*/*.css'])
        .pipe(plugins.uglify())
        .pipe(gulp.dest(productDir+'library/'));

    gulp.src([developDir+'core/**/*', '!'+developDir+'core/**/*.less', '!' + developDir+'core/**/*.css'])
        .pipe(gulp.dest(productDir+'core/'));
    gulp.src([developDir+'core/**/*.css'])
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(productDir+'core/'));

    gulp.src([developDir+'widget/**/*', '!'+developDir+'widget/**/*.js', '!'+developDir+'widget/**/*.css',
        '!'+developDir+'widget/**/*.less'])
        .pipe(gulp.dest(productDir+'widget/'));
    gulp.src([developDir+'widget/**/*.js'])
        .pipe(plugins.uglify())
        .pipe(gulp.dest(productDir+'widget/'));
    gulp.src([developDir+'widget/**/*.css'])
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(productDir+'widget/'));

    gulp.src([developDir+'product/**/*', '!'+developDir+'product/**/*.js', '!'+developDir+'product/**/*.css',
        '!'+developDir+'product/**/*.less'])
        .pipe(gulp.dest(productDir+'product/'));
    gulp.src([developDir+'product/**/*.js'])
        .pipe(plugins.uglify())
        .pipe(gulp.dest(productDir+'product/'));
    gulp.src([developDir+'product/**/*.css'])
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest(productDir+'product/'));

});


// 性能优化，使用r.js合并页面包含的所有amd模块。 使用build-tools目录中的配置文件。
var rjsConfigDir = 'rjs-configs/';
gulp.task('merge', function () {
    fs.readdir(rjsConfigDir, function (err, files) {
        console.log(files);
        files.forEach(function(path){
            !function mergeOneFile (path) {
                fs.readFile(rjsConfigDir + path, function (err, data) {
                    if (err) {
                        setTimeout(function(){
                            mergeOneFile(path);
                            console.log('mergeOneFile again' + new Date());
                        }, 300);
                        return;
                    }
                    var configs = JSON.parse(data);
                    // 保持源码目录不变，替换成生产目录，进行合并
                    for(var attr in configs){
                        if(typeof configs[attr] == 'string'){
                            configs[attr] = configs[attr].replace('src', dateVersionName);
                        }
                    }
                    requirejs.optimize(configs);
                });
            }(path);
        });
    });
});

// 监听本地html 和 css 文件内容修改后，刷新浏览器
gulp.task('reload-html', function () {
    gulp.src(htmlFiles)
        .pipe(connect.reload());
});
gulp.task('reload-css', function () {
    gulp.src(cssFiles)
        .pipe(connect.reload());
    console.log('1. reload-css');
});
gulp.task('compile-merge-less', function(){
    gulp.src(mergeLessFiles)
        .pipe(plugins.less({
            relativeUrls: true
        }))
        .pipe(gulp.dest(developDir));
});
gulp.task('watch', function () {
    gulp.watch([htmlFiles], ['reload-html']);
    gulp.watch([cssFiles], ['reload-css']);
    gulp.watch([lessFiles], ['compile-merge-less']);
});
gulp.task('less',function(){
    gulp.watch(['./**/*.less'],['less-to-css']);
});

gulp.task('less-to-css',function(){
    gulp.src('./**/*.less')
        .pipe(plugins.less({
            relativeUrls: true
        }))
        .pipe(gulp.dest('./'));
});

// 启动本地静态资源服务： 开发目录 和 生产目录
var connect = plugins.connect;
gulp.task('connect-develop', function() {
    connect.server({
        root: developDir,
        port: 8000,
        livereload: true
    });
});
gulp.task('connect-product', function() {
    connect.server({
        root: productDir,
        port: 8001,
        livereload: true
    });
});

gulp.task('default',['connect-develop', 'watch']);
gulp.task('run', ['connect-product']);


