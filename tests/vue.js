suite = class FakeFrameworkTestSuite {
    
    constructor() {
        $('#testbench').html('');
    }

    runTest(params, callback) {
        console.log('running function ' + params.function + ' on UUT.');
        this[params.function](callback);
    }

    testA(callback) {
        for (var i = 0; i < 300; i++) {
            $('#testbench').append('<span id=\'' + i + '\'><span>');
        }
        var start = performance.now();
        for (var i = 0; i < 100000; i++) {
            var id = Math.floor(Math.random() * 1200);
            $('#' + id).html(' ' + i);
        }
        var end = performance.now()
        var delta = end - start;
        var results = {
            'test' : 'testA',
            'time' : delta
        }
        callback(results);
    }

    testB(callback) {
        for (var i = 300; i < 600; i++) {
            $('#testbench').append('<span id=\'' + i + '\'><span>');
        }
        var start = performance.now();
        for (var i = 0; i < 100000; i++) {
            var id = Math.floor(Math.random() * 1200);
            $('#' + id).html(' ' + i);
        }
        var end = performance.now()
        var delta = end - start;
        var results = {
            'test' : 'testB',
            'time' : delta
        }
        callback(results);
    }
    
    testC(callback) {
        for (var i = 600; i < 900; i++) {
            $('#testbench').append('<span id=\'' + i + '\'><span>');
        }
        var start = performance.now();
        for (var i = 0; i < 100000; i++) {
            var id = Math.floor(Math.random() * 1800);
            $('#' + id).html(' ' + i);
        }
        var end = performance.now()
        var delta = end - start;
        var results = {
            'test' : 'testC',
            'time' : delta
        }
        callback(results);
    }
}

UUT = new suite();