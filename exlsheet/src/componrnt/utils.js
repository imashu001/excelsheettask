export const tbc = (tdata) => {
  var totalbasicCost = 0;
  for (var i = 0 ; i < tdata.length; i++){
    totalbasicCost += tdata[i].basicCost;
    console.log(tdata[i].basicCost,"tdata")
  }
  return totalbasicCost
}

export const totaldiscount = (tdata) => {
  var totalDiscount = 0;
  for (var i = 0 ; i < tdata.length; i++){
    totalDiscount += tdata[i].discountAmount;
  }
  return totalDiscount
}

export const totalFinalBasicCost = (tdata) => {
  var totalfinalbasiccost = 0;
  for (var i = 0 ; i < tdata.length; i++){
    totalfinalbasiccost += tdata[i].finalBasicCost;
  }
  return totalfinalbasiccost
}

export const totalTax = (tdata) => {
  var totaltax = 0;
  for (var i = 0 ; i < tdata.length; i++){
    totaltax += tdata[i].taxAmount;
  }
  return totaltax
}

export const finalPrice = (tdata) => {
  var finalPrice = 0;
  for (var i = 0 ; i < tdata.length; i++){
    finalPrice += tdata[i].totalBasicCost;
  }
  return finalPrice
}
