(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    'rxjs':                       'node_modules/rxjs',
    '@angular':                   'node_modules/@angular',
    'firebase':                   'node_modules/firebase',
    'angularfire2':               'node_modules/angularfire2'
  };

  // packages tells the System loader how to load 
  // when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'firebase':                   { main: 'firebase.js', defaultExtension: 'js' },
    'angularfire2':               { main: 'angularfire2.js', defaultExtension: 'js'}
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];

  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;

  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  var config = {
    map: map,
    packages: packages
  };
  
  System.config(config);

})(this);
