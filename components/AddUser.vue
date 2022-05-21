<template>
  <v-container>
        <v-row dense>
            <v-col cols='12'>
                <v-card class="red darken-3" max-height="160px">
                    <v-card-title class='text-h5'>
                        Add New User
                    </v-card-title>
                    <v-card-subtitle>Enter username and other information to create a user.
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-btn outlined @click='dialog = true'>
                            <v-icon>mdi-plus</v-icon>Add </v-btn>
                    </v-card-actions>
                    <v-container>
                        <v-row justify='center'>
                            <v-dialog v-model='dialog' persistent max-width='400px'>
                                <v-card>
                                    <v-card-title>
                                        <span class='text-h5'>Add New User</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols='6'>
                                                    <v-text-field v-model="username" label='Username'></v-text-field>
                                                </v-col>
                                                <v-col cols='6'>
                                                    <v-checkbox v-model="isAuthor" label='Author'></v-checkbox>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color='blue darken-1' text @click='dialog = false'>
                                            Close
                                        </v-btn>
                                        <v-btn color='blue darken-1' text @click='saveUser()'>
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () =>({
        dialog: false,
        username:"",
        isAuthor:false,
}),
    methods:{
    saveUser: function (event) {
    //   console.log(this.username);
    //   console.log(this.isAuthor);
    let userDetails = {}
      if(this.isAuthor){
          userDetails = {
            username: this.username,
            isAuthor: this.isAuthor,
            favorites:[],
            authored: [],
        }
      }
      else{
          userDetails = {
            username: this.username,
            isAuthor: this.isAuthor,
            favorites: [],
            read: [],
            reviews: {},
            ratings: {},    
            avgRating: 0.0,
            totalRating: 0,
            booksRead: 0
      }
      }
      this.$emit("savedUser",userDetails);
      this.dialog = false;
      this.username = "";
      this.isAuthor = false;
    }
  }
}
</script>

<style>

</style>
