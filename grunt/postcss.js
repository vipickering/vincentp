module.exports = {
    postcss: {
        options: {
            processors: [
                require('autoprefixer')({
                    browsers: ['last 2 versions', 'ie 8', 'ie 9']
                })
            ]
        },
        // Autoprefix the css file after compile.
        files: {
            'website/css/main.css': 'website/css/main.css'    // 'destination': 'source
        }
    }
};
