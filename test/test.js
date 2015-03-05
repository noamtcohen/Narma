describe('file check',function(){
    it('should exist',function(done){
        writeAndReadThefile('a-test-file','Hi!',function(err,data){
            expect(data.toString()).toEqual('Hi!');
            done();
        });
    });
});

describe('current working directory',function(){
    it('should end with test',function(){
        expect(getFolderNameOfWorkingDirecory()).toEqual('test');
    });
});

describe('web server test',function(){
    it('should server static string',function(done){
        startWebServer(8089,'Hi!!!',function(){
            $.get("http://localhost:8089",function(data){
                expect(data.toString()).toEqual('Hi!!!');
                done();
            });
        });
    });
});