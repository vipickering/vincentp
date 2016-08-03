module.exports = {
    gruntfile: {
        files: 'grunt/*.js',
        tasks: ['default']
    },
    css: {
        files: '**/*.scss',
        tasks: ['sass', 'postcss', 'csso']
    }
};
