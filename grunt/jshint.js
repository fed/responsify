module.exports = function () {
  return {
    all: [
      'Gruntfile.js',
      'grunt/{,**/}*.js'
    ],
    options: {
      jshintrc: 'grunt/conf/jshintrc.json'
    }
  };
};
