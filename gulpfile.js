var gulp=require('gulp'),
watch=require('gulp-watch');

gulp.task('default',function(){
	console.log('you created gulp task');
});

gulp.task('html',function(){
	console.log('imagine something useful being hapen with your html');
});
gulp.task('styles',function(){
	console.log('imagine sass or postcss tasks runing here');
});

gulp.task('watch',function(){
	watch('./app/index.html',function(){
		gulp.start('html');
	});
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});