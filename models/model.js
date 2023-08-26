const mongoose = require("mongoose");
const { Schema } = mongoose;

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Abhi:SewYnB9AXa2gBF3j@webkriti.fkrcbr7.mongodb.net/test?retryWrites=true&w=majority", // Add the database name at the end of the connection URL
      { useNewUrlParser: true, useUnifiedTopology: true } // Add options for connection
    );
    console.log("Connection successful");
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connect();

const hotelSchema = new Schema({
  hotel_name: String,
  address: {
    streetAddress1: String,
    cityName: String,
    state: String,
    pincode: Number,
  },
  roomType: {
    type: {
      roomName: String,
      roomId: String,
      roomStatus: Boolean,
      price: Number,
    },
  },
  Bookings: {
    type: [
      {
        BookingId: String,
        GuestName: String,
        GuestId: Number,
        GuestPhno: Number,
        GuestEmail: String,
        checkInDate: Date,
        CheckOutDate: Date,
        NumberOfGuests: Number,
        CreditCardNumber: String,
        Payment: {
          paymentMode: String,
          cardHolderName: String,
          paymentStatus: Boolean,
        },
      },
    ],
    default: [],
  },
});

const guestSchema = new Schema({
  GuestId: String,
  BookingId: { type: [Number], default: [], timestamps: true }, // Specify that BookingId is an array of numbers
  bookingStatus: Boolean,
  Guestname: String,
  GuestPhoneNumber: Number,
  EmailID: String,
  BillingAddress: {
    StreetAddressLineOne: String,
    City: String,
    State: String,
    PinCode: Number,
  },
  NoOfRooms: { type: Number, default: 0 },
});

export default { hotelSchema, guestSchema };
