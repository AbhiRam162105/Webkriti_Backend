import mongoose from "mongoose";
import hotelSchema from "../models/model";
import guestSchema from ".``./models/model";

main().catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(
    "mongodb+srv://Abhi:SewYnB9AXa2gBF3j@webkriti.fkrcbr7.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("hello");
}

const HotelModel = mongoose.model("HotelModel", hotelSchema);
const GuestModel = mongoose.model("GuestModel", guestSchema);

const newGuest = new GuestModel({
  GuestId: "nerionco",
  BookingId: [123456, 1234444],
  bookingStatus: true,
  Guestname: "Yanampally Abhiram Reddy",
  GuestPhoneNumber: 6281619764,
  EmailID: "abhiyanampally@gmail.com",
  BillingAddress: {
    StreetAddressLineOne: "neronver",
    City: "Hyderabad",
    State: "Telangana",
    PinCode: 500039,
  },
  NoOfRooms: 2,
});

console.log(newGuest.Guestname);
