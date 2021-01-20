<template lang="html">
    <ul><booking v-for="booking in bookings"  :booking="booking"></booking></ul>
</template>

<script>
import Booking from './Booking'
export default {
    name: 'bookings-grid',
    props: ['bookings'],

    components: {
        "booking": Booking
    }
}
</script>

<style lang = "css" scoped>

</style>