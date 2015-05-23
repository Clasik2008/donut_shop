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


  var donutTable = document.getElementById("donutModel");
  console.dir(donutTable);



  var generateRandomCustomers = function(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
  };


  var donutsPerDay = function(location, avg, min, max) {
    var dailyTotal = 0;
    var storeRow = document.createElement('tr');
    var storeLocation = document.createElement('td');
    var storeLocationTotal = document.createElement('td');
    storeLocation.innerHTML = location;
    storeRow.appendChild(storeLocation);
    var storeHours;


    for(var j = 0; j < 12; j++) {
      var dailyHours = (Math.floor(generateRandomCustomers(min, max) * avg));
      dailyTotal += dailyHours;
      storeHours = document.createElement('td');
      storeHours.innerHTML = dailyHours;
      storeRow.appendChild(storeHours);


    }
    storeLocationTotal.innerHTML = dailyTotal;
    storeRow.appendChild(storeLocationTotal);
    donutTable.appendChild(storeRow);


    return dailyTotal;

  };

  for(var i = 0; i < shops.length; i++) {
   var totalDonutsPerDay = donutsPerDay(shops[i].location, shops[i].avg, shops[i].min, shops[i].max);
    //console.log("donutsPerDay = " + totalDonutsPerDay);

  }




