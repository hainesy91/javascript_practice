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

  //Write out the Hotel name, standard rate, and the special rate

  var hotelName, roomRate, specialRate; //Declare Variables

  hotelName = document.getElementById('hotelName'); //Get Elements
  roomRate = document.getElementById('roomRate');
  specialRate = document.getElementById('specialRate');

  hotelName.textContent = hotel.name; //Write the Hotel Name
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //Write room rate
  specialRate.textContent = '$' + hotel.offerPrice(); //Write Offer price
})