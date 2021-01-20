<template lang="html">
  <form v-on:submit.prevent="addBooking">
    <h2>Add booking</h2>
    <h5> Covid-19 Updates </h5>
    <div class="inputWrap">
        <label for="name"></label>
        <input type="text" id="name" v-model="customer" required /> 
    </div>
    <div class="inputWrap">
        <label for="email"></label>
        <input type="email" id="email" v-model="email" required />
    </div>
    <div>
        <label for="checkInNo">No</label>
        <input type="radio" id="checkInNo" name="checkIn"  :value="false" v-model="checkedIn">
        <label for="checkInYes">Yes</label>
        <input type="radio" id="checkinYes" name="checkIn"  :value="true" v-model="checkedIn">
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
            addBooking() {
               
                // const booking = {
                //     customer: this.customer,
                //     email: this.email,
                //     checkedIn: this.checkedIn
                // };
                BookingService.postBookings(this.$data)
                .then(res => eventBus.$emit('booking-added', res))
                // .then( eventBus.$emit("booking-added", booking))
                // .then(console.log("bookings form" + this.customer));

                // reset fields
            this.customer = this.email = "",
            this.checkedIn = false
            },
        },

}
</script>

<style>

</style>