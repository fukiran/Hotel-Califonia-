const baseURL = 'http://localhost:3000/api/bookings/'

export default {
    // get all
    getBookings() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    // create one
    postBookings(payload) {
        return fetch(baseURL, {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: { 'Content-Type': 'application/json' }
            })
            .then(res => res.json());
            // .then(console.log('service bananas'))
    },
    // delete
    destroyBooking(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    }

}