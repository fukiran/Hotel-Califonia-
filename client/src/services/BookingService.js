const baseURL = 'http://localhost:3000/api/bookings/'

export default {
    // get all
    getBookings() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    // create one
    postBookings(booking) {
        return fetch(baseURL, {
          method: 'POST',
          body: JSON.stringify(booking),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json());
      },
    // delete
    destroyBooking(id) {
        console.log('booking service destroy id' + id)
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    putBooking(booking) {
        return fetch(baseURL + booking._id, {
          method: 'PUT',
          body: JSON.stringify(booking),
          headers: { 
            'Content-Type': 'application/json' 
          }
        })
          .then(res => res.json());
      }
}