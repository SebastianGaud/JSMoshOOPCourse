
/*
    Thanks to @https://gist.github.com/electricg i used his code to create TimeUtils class
    gist at: https://gist.github.com/electricg/4372563

*/ 
function TimeUtils() {
    this.now = function() {
        return (new Date()).getTime(); 
    }; 

    this.formatTime = function (time) {
        var h = m = s = ms = 0;
        var newTime = '';
    
        h = Math.floor( time / (60 * 60 * 1000) );
        time = time % (60 * 60 * 1000);
        m = Math.floor( time / (60 * 1000) );
        time = time % (60 * 1000);
        s = Math.floor( time / 1000 );
        ms = time % 1000;
    
        newTime = pad(h, 2) + ':' + pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
        return newTime;
    }

    let pad = function (num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size);
    }

}


/**
 * this kind of implementation of stopwatch is not so well structured is only for teach purpose
 * make all this property and make all method prototype member breaks a lot of OOP principle
 */

function Stopwatch() {
    let startTime, stopTime, duration = 0, isRunning = false;

    Object.defineProperty(this, 'timeUtil', {
        get: function () {
            return new TimeUtils();
        }
    });
    
    Object.defineProperty(this, 'duration', {
        get: function () {
            return this.timeUtil.formatTime((this.stopTime - this.startTime));
        },
    });
    
    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        },
        set: function (value) {
            startTime = value;
        }
    });
    
    Object.defineProperty(this, 'stopTime', {
        get: function () {
            return stopTime;
        },
        set: function (value) {
            stopTime = value;
        }    
    });
    
    Object.defineProperty(this, 'isRuning', {
        get: function () {
            return isRunning;
        },
        set: function (value) {
            isRunning = value;
        }
    });
}

Stopwatch.prototype.starts = function () {
    if (this.isRunning) {
        throw new Error('StopWatch is already running')
    }

    this.isRunning = true;
    this.startTime = this.timeUtil.now();
}

Stopwatch.prototype.stop = function () {
    this.isRunning = false;
    this.stopTime = this.timeUtil.now();
}

Stopwatch.prototype.reset = function () {
    this.isRunning = false;
    this.duration = 0;
    this.startTime = null;
    this.stopTime = null;
}

const sw = new Stopwatch();
sw.starts();
setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 10000)

