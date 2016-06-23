/*The script is placed inside an immediately invoked function expression which helps protect the scope of the variables */

(function() {

  //Part One: Create Hotel Object and Write out the offer details//

  //Create a hotel object using object literal syntax

  var hotel = {
    name: 'Park',
    roomRate: 240, //Amount in sterling
    discount: 15, //Percentage Discount
    offerPrice: function() {
      var offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    } 
  };
})