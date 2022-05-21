<template>
<v-main>
  <v-data-table
    :headers="headers"
    :items="rew"
    class="elevation-1"
  >
    <template v-slot:[`header.name`]="{ header }">
      {{ header.text.toUpperCase() }}
    </template>
  </v-data-table>
</v-main>
</template>

<script>
  export default {
    props:["rew"],
    data: () => ({
      headers: [
        {
          text: 'Book Name',
          align: 'start',
          value: 'book',
        },
        { text: 'Rating', value: 'rating' },
        { text: 'Review', value: 'review' },
      ],
    }),
    
  }
</script>

<style>

</style>