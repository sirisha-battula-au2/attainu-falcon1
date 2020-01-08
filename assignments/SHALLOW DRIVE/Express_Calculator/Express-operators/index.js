app.get('/add', function (req,res) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    res.json({ 'a': a, 'b': b, result : (a+b) }); 
    
    })
    
    app.get('/subtract', function (req,res) {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        res.json({ 'a': a, 'b': b, result : (a-b) }); 
        
        })
    
    app.get('/multiply', function (req,res) {
            var a = parseInt(req.query.a);
            var b = parseInt(req.query.b);
            res.json({ 'a': a, 'b': b, result : (a*b) }); 
            
    })
    
    app.get('/divide', function (req,res) {
        var a = parseInt(req.query.a);
        var b = parseInt(req.query.b);
        res.json({ 'a': a, 'b': b, result : (a/b) }); 
        
    })
    app.listen(3000)