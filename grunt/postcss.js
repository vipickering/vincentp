module.exports = {
    postcss: {
        options: {
            processors: [
                require('autoprefixer')({
                    browsers: ['> 1%']
                })
            ]
        },
        // Autoprefix the css file after compile.
        files: {
            'website/css/main.css': 'website/css/main.css'    // 'destination': 'source
        }
    }
};
