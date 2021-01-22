// https://github.com/farukvai/assignment3

// kilometerToMeter

function kilometerToMeter(km) {
    var metter = Math.abs(km) * 1000;
    return metter;
}


//budgetCalculator

function budgetCalculator(watchLimit, phoneLimit, laptopLimit) {
    var watchPrice = 50 * watchLimit;
    var phonePrice = 100 * phoneLimit;
    var laptopPrice = 500 * laptopLimit;

    var totaoPrice = watchPrice + phonePrice + laptopPrice;
    return totaoPrice;
}



//hotelCost

function hotelCost(n) {

    if (0 < n && n < 11) {
        var cost = n * 100;
        return cost;
    } else if (10 < n && n < 21) {
        var cost = (100 * 10) + (n - 10) * 80;
        return cost;
    } else if (20 < n && n <= 31) {
        var cost = (100 * 10) + (80 * 10) + (n - 20) * 50;
        return cost;
    } else {
        return "Have no Date";
    }

}


//megaFriend

function megaFriend(friends) {
    var largeWord = 0;
    for (var i = 0; i < friends.length; i++) {
        var element = friends[i];
    }
    if (largeWord < element.length) {
        largeWord = element;
    }
    return largeWord;
}





