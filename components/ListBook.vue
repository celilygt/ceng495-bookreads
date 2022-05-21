<template>
<v-main>
  <v-data-table
    :headers="headers"
    :items="bookList"
    :items-per-page="itemsPerPage"
    hide-default-footer
    :page.sync="page"
    class="elevation-1"
  >
    <template v-slot:[`header.name`]="{ header }">
      {{ header.text.toUpperCase() }}
    </template>
  </v-data-table>
  <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
  </div>
</v-main>
</template>

<script>
  export default {
    props:["bookList"],
    watch: { 
    bookList: function(newVal, oldVal) { // watch it
          if(newVal !== ""){
            this.pageCount = Math.ceil(newVal.length / this.itemsPerPage)
          }
          
        }
    },
    data: () => ({
      page: 1,
      itemsPerPage: 5,
      pageCount: 0,
      headers: [
        {
          text: 'Book Name',
          align: 'start',
          value: 'name',
        },
        { text: 'Author(s)', value: 'authors' },
        { text: 'Translator', value: 'translators' },
        { text: 'Editor', value: 'editors' },
        { text: 'Cover URL', value: 'cover' },
        { text: 'Fiction', value: 'fiction' },
        { text: 'Publisher', value: 'publisher' },
        { text: 'Genre', value: 'genre' },
        { text: 'Year Published', value: 'year' },
        { text: 'Average Rating', value: 'avgRating'},
        { text: 'Reviews', value: 'reviewedBy' },
      ],
    }),
    
  }
</script>

<style>

</style>