var DonutShop = function(location, min, max, avg) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avg = avg;
};

  var shops = [];
    shops.push(new DonutShop("Downtown", 8, 43, 4.50));
    shops.push(new DonutShop("Capitol Hill", 4, 37, 2.00));
    shops.push(new DonutShop("South Lake Union", 9, 23, 6.33));
    shops.push(new DonutShop("Wedgewood", 2, 28, 1.25));
    shops.push(new DonutShop("Ballard", 8, 58, 3.75));

  DonutShop.prototype.generateRandomCustomers = function(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    };

  DonutShop.prototype.donutsPerHour = function() {
    return parseInt(Math.floor(this.generateRandomCustomers(this.min, this.max) * this.avg));
  }
  //creating a render function for the table
  //creates first location cell. starting point
  DonutShop.prototype.render = function() {
    var donutTable = document.getElementById('donutModel');
    var storeRow = document.createElement('tr');
    var storeLocation = document.createElement('td');
    var textLocation = document.createTextNode(this.location);
    //storeLocation.innerHTML = location;
    storeRow.appendChild(storeLocation);
    storeLocation.appendChild(textLocation);
    var dailyTotal = 0;

  // input data results into each of the following cells after location. per/hours
    for(var j = 0; j < 12; j++) {
      var dailyHours = this.donutsPerHour();
      dailyTotal += dailyHours;
      storeHours = document.createElement('td');
      storeHours.innerHTML = dailyHours;
      storeRow.appendChild(storeHours);
    }
  // results of the sum of daily donuts per hour into new total column row
    var storeLocationTotal = document.createElement('td');
    storeLocationTotal.innerHTML = dailyTotal;
    storeRow.appendChild(storeLocationTotal);
    donutTable.appendChild(storeRow);
    return dailyTotal;
  }
    for(var i = 0; i < shops.length; i++) {
      shops[i].render();
    };
//USER INPUT
    var button = document.getElementById('add');
    button.addEventListener('click', function(storeValues) {
    // declare variables you need for there users input
      var inputLocation, inputMin, inputMax, inputAvg;
      //store the elements
      inputLocation = document.getElementById('inputLocation');
      inputMin = document.getElementById('inputMin');
      inputMax = document.getElementById('inputMax');
      inputAvg = document.getElementById('inputAvg');

      var locationValue = inputLocation.value;
      var minValue = inputMin.value;
      var maxValue = inputMax.value;
      var avgValue = inputAvg.value;

      var inputArray = new DonutShop(locationValue, minValue, maxValue, avgValue);
      shops.push(inputArray);
      inputArray.render();
      storeValues.preventDefault();
    }, false);














