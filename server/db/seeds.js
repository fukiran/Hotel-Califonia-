// db name
use hotelCalifornia;
db.dropDatabase();

db.bookings.insertMany([
    {
        customer: "Don Henley",
        email: "don@lovelyplace.com",
        checkedIn: true
    },
    {
        customer: "Glenn Frey",
        email: "don@lovelyplace.com",
        checkedIn: true
    },
    {
        customer: "Joe Walsh",
        email: "joe@lovelyplace.com",
        checkedIn: true
    },
    {
        customer: "Felder Walsh",
        email: "felder@lovelyplace.com",
        checkedIn: true
    }
])