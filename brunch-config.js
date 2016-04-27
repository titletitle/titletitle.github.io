module.exports = {
  files: {
    javascripts: {
      joinTo: 'bundle.js'
    },
    stylesheets: {
      joinTo: 'bundle.css'
    }
  },
  conventions: {
    assets: /^(resources\/static\/assets)/
  },
  paths: {
    // Dependencies and current project directories to watch
    watched: [
      "src/css", "src/js"
    ],
    // Where to compile files to
    public: "lib"
  },
  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')(['last 5 versions']),
        require('csswring')
      ]
    },
    stylus: {}
  },
  modules : {
    nameCleaner : function (path) {
      return path.replace('src/js/', '')
    }
  }
};
