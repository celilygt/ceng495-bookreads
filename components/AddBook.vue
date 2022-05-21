<template>
  <v-container>
        <!-- <v-row dense>
            <v-col cols='5'> -->
                <v-card class="blue darken-3" max-height="160px">
                    <v-card-title class='text-h5'>
                        Add New Book
                    </v-card-title>
                    <v-card-subtitle>Enter fields Name, Author etc. to save a book into system.
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn outlined @click='dialog = true'>
                            <v-icon>mdi-plus</v-icon>Add </v-btn>
                    </v-card-actions>
                    <v-container>
                        <v-row justify='center'>
                            <v-dialog v-model='dialog' persistent max-width='800px'>
                                <v-card>
                                    <v-card-title>
                                        <span class='text-h5'>Add New Book</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="name" label='Name of the Book' required></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="authors" label='Authors'  hint='If there are multiple authors, seperate them with a comma.'></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="translator" label='Translator'></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="editor" label='Editor'></v-text-field>
                                                </v-col>
                                                <v-col cols='12'>
                                                    <v-text-field v-model="cover" label='Cover URL'></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-checkbox v-model="fiction" label='Fiction' ></v-checkbox>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-select v-model="genre" label="Genre" v-if="fiction" :items='["Crime", "Fantasy", "Romance", "Science Fiction", "Horror", "Other"]'></v-select>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="publisher" label='Publisher'></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="year" label='Year Published'></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color='blue darken-1' text @click='dialog = false'>
                                            Close
                                        </v-btn>
                                        <v-btn color='blue darken-1' text @click='saveBook()'>
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </v-container>
                </v-card>
            <!-- </v-col>
        </v-row> -->
    </v-container>
</template>

<script>
export default {
    data: () =>({
        dialog: false,
        name:"",
        authors:"",
        translator:"",
        editor:"",
        cover:"",
        fiction: false,
        publisher:"",
        genre:"",
        year:"",
}),
    methods:{
    saveBook: function (event) {
    //   console.log(this.name);
    //   console.log(this.authors)
    //   console.log(this.translator)
    //   console.log(this.editor)
    //   console.log(this.cover)
    //   console.log(this.fiction)
    //   console.log(this.publisher)
    //   console.log(this.genre)
    //   console.log(this.year)
    let bookDetails = {
        name:           this.name,
        authors:        this.authors.split(","),
        translators:    this.translator,
        editors:        this.editor,
        cover:          this.cover,
        fiction:        this.fiction,
        publisher:      this.publisher,
        genre:          this.genre,
        year:           this.year,
        avgRating:      0.0,
        totalRating:    0,
        readNumber:     0,
        ratedBy:        {},
        reviewedBy:     {},
    }
      this.$emit('savedBook',bookDetails);
      this.dialog = false;
      this.name = "";
      this.authors = "";
      this.translator = "";
      this.editor = "";
      this.cover = "";
      this.fiction = false;
      this.publisher = "";
      this.genre = "";
      this.year = "";
    }
  }
}
</script>

<style>

</style>
