// invoked for any requests passed to this router
router.use(function (req, res, next) {
    // .. some logic here .. like any other middleware
   
    next()
  })
  
  // will handle any request that ends in /events
  // depends on where the router is "use()'d"
  router.get('/todo', function (req, res, next) {
    res.render('index');
  })

  app.use('/todo', router)