
/*
    Thanks to @https://gist.github.com/electricg i used his code to create TimeUtils class
    gist at: https://gist.github.com/electricg/4372563

*/ 
function TimeUtils() {
    this.now = function() {
        return (new Date()).getTime(); 
    }; 

    this.formaTime = function (time) {
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

function Stopwatch() {
    let startTime, stopTime, duration = 0, isRunning = false;
    let timeUtil = new TimeUtils();

    this.starts = function () {
        if (isRunning) {
            throw new Error('StopWatch is already running')
        }

        isRunning = true;
        startTime = timeUtil.now();
    }

    this.stop = function () {
        isRunning = false;
        stopTime = timeUtil.now();
    }

    this.reset = function () {
        isRunning = false;
        duration = 0;
    }


    Object.defineProperty(this, 'duration', {
        get: function () {
            return timeUtil.formaTime((stopTime - startTime));
        }
    })
}

const sw = new Stopwatch();
sw.starts();

setTimeout(() => {
    sw.stop();
    console.log(sw.duration);
}, 10000)

