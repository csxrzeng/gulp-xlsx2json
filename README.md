# gulp-xlsx2json
> Excel (XLSX/XLS) to json.
> If there is a headRow specified, export each line to an object.
> Otherwise export each line to an array.

## Usage
First, install `gulp-xlsx2json` as a development dependency:

```shell
> npm install --save-dev gulp-xlsx2json
```

Then, add it to your `gulpfile.js`:

```javascript
var xlsx2json = require('gulp-xlsx2json');

gulp.task('copy', function() {
    gulp.src('config/**.xlsx')
        .pipe(xlsx2json({
            headRow: 1,
            valueRowStart: 3,
            trace: true
        }))
        .pipe(gulp.dest('build'))
});
```


## API

### xlsx2json([options])

#### options.headRow
Type: `number`

Default: `1`

The row number of head. (Start from 1).

#### options.valueRowStart
Type: `number`

Default: `3`

The start row number of values. (Start from 1)

#### options.trace
Type: `Boolean`

Default: `false`

Whether to log each file path while convert success.

## License
MIT &copy; Chris
