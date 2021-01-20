<template>
  <li>
      <h2>{{ booking.customer }}</h2>
      <span>{{ booking.email }}</span><br>
      <span>{{ booking.checkedIn }}</span>
      <button v-on:click="deleteBooking(booking) " >Delete</button>
    </li>
</template>
<script>
import { eventBus } from '../main'
import BookingService from '../services/BookingService'

export default {
    name: 'booking',
    props: ['booking'],

    methods: {
        deleteBooking(booking) {
            const id = booking._id
            
            BookingService.destroyBooking(id)
            .then(eventBus.$emit("booking-deleted", id));
        }
    }
}

</script>

<style lang="css" scoped>

</style>