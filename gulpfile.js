var gulp = require("gulp"),
	sass = require("gulp-ruby-sass"),
	connect = require("gulp-connect");


gulp.task("sass", function(){
	
		return sass("style.scss").on("error", sass.logError).pipe(gulp.dest("css/")).pipe(connect.reload());
			
	});

gulp.task("js", function(){
	
		gulp.src("main.js").pipe(connect.reload());
		gulp.src("bio.js").pipe(connect.reload());
		gulp.src("albums.js").pipe(connect.reload());
			
	});

gulp.task("html", function(){
	
		gulp.src("index.html").pipe(connect.reload());
		gulp.src("biography.html").pipe(connect.reload());
		gulp.src("music.html").pipe(connect.reload());
		gulp.src("albumtemplate.html").pipe(connect.reload());
			
	});

gulp.task("watch", function(){
	
		gulp.watch("style.scss", ["sass"]);
		gulp.watch("index.html", ["html"]);
		gulp.watch("biography.html", ["html"]);
		gulp.watch("albumtemplate.html", ["html"]);
		gulp.watch("music.html", ["html"]);
		gulp.watch("main.js", ["js"]);
		gulp.watch("bio.js", ["js"]);
		gulp.watch("albums.js", ["js"]);
			
	});

gulp.task("connect", function(){
	
		connect.server({livereload : true});
			
	});


gulp.task("default", ["connect", "watch"]);
