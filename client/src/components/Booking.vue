<template>
  <li>
      <h2>{{ booking.customer }}</h2>
      <span>{{ booking.email }}</span><br>
      <span>{{ booking.checkedIn }}</span>
    </li>
</template>
<script>
export default {
    name: 'booking',
    props: ['booking']
}
</script>

<style lang="css" scoped>

</style>