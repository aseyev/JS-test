function Logger() {
    // console.log('xxx');
}
Logger.prototype = {
    log: function (message) {
        console.log(message);
    }
}


function Car(containerId) {
    this._logger = new Logger();

    this._engine = new Engine();
    this._gearbox = new Gearbox();

    this._view = new CarView();
    this.view.render(containerId);
}

function CarView() {
    
}

CarView.prototype = {
    render: function(containerId) {
        var container = document.getElementById(containerId);
        container.innerHTML = `
            <div class="car">
                <div class="info_panel">
                    <label>status: </label> <span dataRole='status'>off</span>
                </div>
                <div class="controls">
                    <input dataRole='start_car' type="button" value="START">
                    <hr>
                    <label>Gearbox: </label> <span dataRole='gearBox_value'>N</span>
                </div>
            </div>
        `;
        this._startButtons = document.getElementById(containerId).querySelectorAll("[dataRole='start_car']");
        this._statusLabels = document.getElementById(containerId).querySelectorAll("[dataRole='status']");
        this._gearBoxValueLabels = document.getElementById(containerId).querySelectorAll(
            "[dataRole='gearBox_value']");
    },
    drawStatus: function (status) {
        this._processEls (this._statusLabels, function (item) {
            item.innerHTML = status;
        })
    },
    processEls: function (arrayOfEls, processor) {
        for (let i = 0; i < arrayOfEls.length; i++) {
            var item = arrayOfEls[i];
            processor(item);
        }
    }
}

Car.prototype = {
    start: function() {

        var randomNumber = Math.random();

        if (randomNumber > 0.5) {
            this._carStarted();
        } else {
            this._carCannotBeStarted();
        }
    },

    _carStarted: function() {
        // debugger
        this._logger.log("Ok");
    },

    _carCannotBeStarted: function() {
        // debugger
        this._logger.log("Not Ok");
        this._view.drawStatus('cannot');
    }
};
// ---------------------------------------------------------------

function Engine() {
    // let boundLogger = this._logger(Engine);
    // boundLogger.log ("engine created");
    console.log("engine created");
}
// ---------------------------------------------------------------

function Gearbox() {
    console.log("gearbox created");
}
// ---------------------------------------------------------------

// ---------------------------------------------------------------

(function() {
    var car1 = new Car('car1');
    car1.start();
})();


// var gearBoxInterval;
// startButton.addEventListener("click", carStartListener);

// function carStartListener() {
//     var randomNumber = Math.random();
//     if (randomNumber > 0.5) {
//         carStarted();
//     } else {
//         carCannotStart();
//     }

//     function drawStatus(status) {
//         statusLabel.innerHTML = status;
//     }

//     function devlog(message) {
//         console.log(message);
//     }

//     function carStarted() {
//         drawStatus("Started!");
//         devlog("Started");
//         startButton.classList.add("hide");
//         gearBoxStarted();
//         engineOverheatedInit();
//     }

//     function gearBoxStarted() {
//         var gearBoxValue = 0;
//         gearBoxValueLabel.innerHTML = gearBoxValue;

//         function incrementGearBoxValue() {
//             if (gearBoxValue < 5) {
//                 gearBoxValue++;
//                 gearBoxValueLabel.innerHTML = gearBoxValue;
//             }
//         }
//         gearBoxInterval = window.setInterval(incrementGearBoxValue, 1000);
//     }
//     function engineOverheatedInit() {
//         function engineOverheated() {
//             drawStatus("engine overheated");
//             devlog("engine overheated");
//             startButton.classList.remove("hide");
//             gearBoxValueLabel.innerHTML = "N";
//             window.clearInterval (gearBoxInterval);
//         }
//         window.setTimeout(engineOverheated, 2000);
//     }

//     function carCannotStart() {
//         devlog("Starter broken");
//         drawStatus("Starter broken");
//     }
// }
