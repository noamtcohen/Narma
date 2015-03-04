describe('file check',function(){
    var writeOK;

    beforeEach(function(done){
        writeAndReadThefile('a-test-file','Hi!',function(err,data){
            writeOK = data.toString()=='Hi!';
            done();
        });
    });

    it('should exist',function(){
      expect(writeOK).toEqual(true);
    });
});

describe('current working directory',function(){
    it('should end with test',function(){
        expect(getFolderNameOfWorkingDirecory()).toEqual('test');
    });
});

describe('web server test',function(){
    var webServerResponse;

    beforeEach(function(done){
        startWebServer(8089,'Hi!!!',function(){
            $.get("http://localhost:8089",function(data){
                webServerResponse = data.toString();
                done();
            });
        })
    });

    it('should server static string',function(){
        expect(webServerResponse).toEqual('Hi!!!');
    });
});