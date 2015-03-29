//data.js
Succss.pages = {
  'home': {
    url:'www.google.com',
    directory:'screenshots/dir',
    // captures: { 'name' : 'CSS selector' }
    captures: {
      // leave an empty value if selector == name
      'header':'',
      'dynamic-text':'body #header-text > #static-line + span'
    }
  }

};

Succss.viewports = {
  // './screenshots/dir/home--header--1366x768.png' file
  // './screenshots/dir/home--dynamic-text--1366x768.png' file
  'default': {
    width: 1366,
    height: 768
  },
  // './screenshots/dir/home--header--640x480.png' file
  // './screenshots/dir/home--dynamic-text--640x480.png' file
  'mobile-landscape': {
    width: 640,
    height: 480
  }
};
