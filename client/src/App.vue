<template>
  <div id="app">
    <bookings-form/>
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import { eventBus } from './main'
import BookingsService from './services/BookingService';
import BookingsGrid from './components/BookingsGrid';
import BookingsForm from './components/BookingsForm';

export default {
  name: 'App',
  components: {
    
    "bookings-grid": BookingsGrid,
    "bookings-form": BookingsForm    
  },
  data() {
    return {
      bookings : []
    }
  },
  methods: {
    fetchBookings() {
      BookingsService.getBookings()
      .then((data) => this.bookings = data)
    },
  },
  mounted() {
    this.fetchBookings();

    eventBus.$on("booking-added", (booking) => {
      this.bookings.push(booking);
    });

    eventBus.$on("booking-deleted", (id) => {
      
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1)
    });
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
