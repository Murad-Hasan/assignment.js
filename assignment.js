//  https://github.com/Murad-Hasan/assignment.js



// part 1 (kilometerToMeter)

function kilometerToMeter (kilometer) {
    const meter = kilometer*1000;
    return meter ; 
}

const unitConvert = [145,200,350];

const firstResult = kilometerToMeter(unitConvert[0]);
const secondResult = kilometerToMeter(unitConvert[1]);
const thirdResult = kilometerToMeter(unitConvert[2]);

console.log (firstResult, secondResult, thirdResult);





//part 2 (budgetCalculator)

function budgetCalculator(watch,phone,leptop) {
         
    var watchPrice = watch * 50 ;
    var phonePrice = phone * 100 ;
    var leptopPrice = leptop * 500 ;

   var totalBudget = watchPrice + phonePrice + leptopPrice ;

    return totalBudget;
}

var result = budgetCalculator(20,24,26)
console.log  (result)






// part 3  (hotelCost)


 
function hotelCost(totalDays) {
    var totalCost = 0;

    if (totalDays <= 10) {
        totalCost = totalDays * 100;
    }
    else if (totalDays <= 20) {
        var firstDuration = 10*100;
        var remainDays = totalDays - 10;
        var secondDuration = remainDays * 80 ;
        totalCost = firstDuration + secondDuration ;
    }
    else{
        var firstDuration = 10 * 100;
        var secondDuration = 10 * 80 ;
        var remainDays = totalDays - 20;
        var thirdDuration = remainDays * 50;
        totalCost = firstDuration + secondDuration + thirdDuration ;
    }
    return totalCost;
}

var cost = hotelCost(22);
console.log (cost)






// part 4 (megaFriend)


var friendList = ["Murad", "joy", "mahamudul", "hillol", "jamshed"];

function megaFriend(names) {
  var leargestName = names[0];
  for (i = 0; i < names.length; i++) {
      var element = names[i];
    if (element.length > leargestName.length) {
      leargestName = element;
    }
  }
  return leargestName;
}


var check = (megaFriend(friendList));
console.log(check);


