<template>
  <form v-on:submit="addBooking" id="bookings-form" method="post">
    <h2>Add booking</h2>
    <h5> Covid-19 Updates </h5>
    <div class="inputWrap">
        <label for="name"></label>
        <input type="text" id="name" v-model="customer"/> 
    </div>
    <div class="inputWrap">
        <label for="email"></label>
        <input type="text" id="email" v-model="email"/>
    </div>
    <div>
        <label for="checkInNo">No</label>
        <input type="radio" id="checkInNo" name="checkIn"  value=false v-model="checkedIn">
        <label for="checkInYes">Yes</label>
        <input type="radio" id="checkinYes" name="checkIn"  value=true v-model="checkedIn">
    </div>
    <input type="submit" value="Save" id="save">
  </form>
</template>

<script>
    import { eventBus } from "../main";
    import BookingService from "../services/BookingService"
    

export default {
        data() { 
            return{
                customer: "",
                email: "",
                checkedIn: false
            }; 
            },
        methods: {
            addBooking(e) {
                e.preventDefault();
                const booking = {
                    customer: this.customer,
                    email: this.email,
                    checkedIn: this.checkedIn
                };
                // reset fields
            this.customer = this.email = "",
            this.checkedIn = false

            BookingService.postBookings(booking)
            .then(eventBus.$emit("booking-added", booking));
            },
        },

    mounted() {
        eventBus.$on("booking-updated", (id) => {
        const index = this.bookings.findIndex(booking => booking._id === id);  
        })
    }

}
</script>

<style>

</style>