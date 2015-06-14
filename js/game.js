var Resourses = function(resourses) {
    this.init();
    if (resourses != undefined) {
        this.add(resourses);
    }
};

Resourses.prototype.init = function() {
    var self = this;

    self._resourses = ['coal', 'iron', 'tin', 'copper', 'silver', 'gold'];
    self._cost = [];

    var cost = 1;
    self._resourses.forEach(function(value) {
        self[value] = 0;
        self._cost[value] = cost;
        cost *= 2;
    });
};

Resourses.prototype.add = function(resoursesObj) {
    var self = this,
        keys = Object.keys(resoursesObj);
    
    self._resourses.forEach(function(value) {
        if (keys.indexOf(value) != -1) {
            self[value] += resoursesObj[value];
        }
    });
};

Resourses.prototype.cost = function(name) {
    if (this._resourses.indexOf(name) == -1) {
        console.log('Warning: wrong `name` param.');
        return 0;
    }
    return this._cost[name] * this[name];
};

var Worker = function(level) {
    this.level = level;
};

Worker.prototype.dig = function() {
    return {
        coal: Math.pow(10, this.level.level - 1)
    } 
};

var Level = function(miner) {
    this.miner = miner;
    this.level = miner.levels.length + 1;
    this.workers = [];
};

Level.prototype.dig = function() {
    this.miner.res.add({
        coal: Math.pow(10, this.level - 1)
    });
};

Level.prototype.getWorkerCost = function() {
    return Math.pow(10, this.level) * Math.pow(1.4, this.workers.length);
};

Level.prototype.hireWorker = function() {
    this.workers.push(new Worker(this));
};

angular.module('Miner', [])
    .controller('MinerCtrl', ['$scope', function($scope) {
        var miner = this;
        
        miner.res = new Resourses();
        miner.cash = 0;

        miner.levels = [];

        miner.sell = function(resName) {
            miner.cash += miner.res.cost(resName);
            miner.res[resName] = 0;
        };

        miner.canHire = function(level) {
            return level.getWorkerCost() <= miner.cash;
        };

        miner.hireWorker = function(level) {
            miner.cash -= level.getWorkerCost();
            level.hireWorker();
        };

        window.setInterval(function() {
            $scope.$apply(function() {
                miner.levels.forEach(function(level) {
                    level.workers.forEach(function(worker) {
                        miner.res.add(worker.dig());
                    });
                });
            });
        }, 1000);

        miner.getNewLevelCost = function() {
            return Math.pow(1e3, miner.levels.length);
        };

        miner.canDigNewLevel = function() {
            return miner.getNewLevelCost() <= miner.cash;
        };

        miner.digNewLevel = function() {
            miner.levels.push(new Level(miner));
        };
        miner.digNewLevel();

    }]);
