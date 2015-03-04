describe('file check',function(){
   var fileExists;

    beforeEach(function(done){
        var fs = require('fs');
        fs.writeFile('a-test-file',function(err){
            fs.readFile('a-test-file',function(err,data){
                fileExists= !err;
                done();
            });
        });
    });

    it('should exist',function(){
      expect(fileExists).toEqual(true);
    });
});