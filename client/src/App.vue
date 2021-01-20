<template>
  <div id="app">
    
    <bookings-grid :bookings="bookings"/>
  </div>
</template>

<script>
import BookingsService from './services/BookingService';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: 'App',
  components: {
    
    "bookings-grid": BookingsGrid
    // BookingForm    
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
    this.fetchBookings()
    // .then(console.log('mounted bananas'));
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
