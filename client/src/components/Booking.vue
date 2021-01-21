<template lang="html">
  <li>
      <h2>{{ this.booking.customer }}</h2>
      <span>{{ this.booking.email }}</span><br>
      <span>{{ this.booking.checkedIn }}</span>

        <form v-on:submit="updateBooking(booking)">
            <label for="checkInNo">No</label>
            <input type="radio"  name="checkIn"  v-model="booking.checkedIn" :value="false">
            <label for="checkInYes">Yes</label>
            <input type="radio"  name="checkIn"  v-model="booking.checkedIn" :value="true">
        </form>

      <button v-on:click="deleteBooking">Delete</button>
    </li>
</template>
<script>

import { eventBus } from '../main';
import BookingService from '../services/BookingService';

export default {
    name: 'booking',
    props: ['booking'],
    methods: {
        deleteBooking: function() {
            console.log('booking.vue' + this.booking._id)
            eventBus.$emit("booking-deleted", this.booking._id)
        },

        updateBooking(booking) {
            // BookingService.putBooking(booking);
        },
    }   
}

</script>

<style lang="css" scoped>

</style>