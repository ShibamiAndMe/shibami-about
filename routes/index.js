var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var data = {
    me: {
      name: 'Alexandra',
      lastName: 'Masero',
      prof: 'Community Manager'
    },
    work: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu rutrum leo. Sed nec imperdiet nulla. Curabitur sollicitudin tellus nibh, ut tincidunt purus dignissim a. Fusce efficitur urna eget elit viverra, ut cursus felis maximus. Proin vulputate interdum metus, condimentum laoreet massa luctus sit amet. Praesent quis tristique sapien. Vestibulum tortor nulla, porttitor et elit eget, commodo ultricies est. Sed rutrum luctus lacus, id porta turpis aliquet a. Cras rutrum nisl vel tellus ultricies, ut laoreet ex accumsan. Fusce libero magna, sagittis eget nulla ac, bibendum maximus tortor. Nam sed diam eu eros consequat tempor. Sed eu lobortis magna, in elementum ex.'
    },
    socialMedia: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu rutrum leo. Sed nec imperdiet nulla. Curabitur sollicitudin tellus nibh, ut tincidunt purus dignissim a. Fusce efficitur urna eget elit viverra, ut cursus felis maximus. Proin vulputate interdum metus, condimentum laoreet massa luctus sit amet. Praesent quis tristique sapien. Vestibulum tortor nulla, porttitor et elit eget, commodo ultricies est. Sed rutrum luctus lacus, id porta turpis aliquet a. Cras rutrum nisl vel tellus ultricies, ut laoreet ex accumsan. Fusce libero magna, sagittis eget nulla ac, bibendum maximus tortor. Nam sed diam eu eros consequat tempor. Sed eu lobortis magna, in elementum ex.'
    },
    contact: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu rutrum leo. Sed nec imperdiet nulla. Curabitur sollicitudin tellus nibh, ut tincidunt purus dignissim a. Fusce efficitur urna eget elit viverra, ut cursus felis maximus. Proin vulputate interdum metus, condimentum laoreet massa luctus sit amet. Praesent quis tristique sapien. Vestibulum tortor nulla, porttitor et elit eget, commodo ultricies est. Sed rutrum luctus lacus, id porta turpis aliquet a. Cras rutrum nisl vel tellus ultricies, ut laoreet ex accumsan. Fusce libero magna, sagittis eget nulla ac, bibendum maximus tortor. Nam sed diam eu eros consequat tempor. Sed eu lobortis magna, in elementum ex.'
    }
  }

  res.render('index', {
    data: data,
    title: 'Shibami About'
  });
});

module.exports = router;
