<template>
  <v-main>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="8"
    >
      <v-card>
        <v-card-title class="grey darken-3">
          <span class="text-h5 white--text">{{$store.state.currentUser.username}}</span>
        </v-card-title>

        <v-list>
          <v-list-item>
            <v-list-item-action>
              ID:
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{id}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item v-if="!isAuthor">
            <v-list-item-action>
              <v-icon>mdi-book</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{booksRead}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset v-if="!isAuthor"></v-divider>
          <v-list-item v-if="!isAuthor" >
            <v-list-item-action>
              <v-icon>mdi-star</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{avgRating}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset v-if="!isAuthor"></v-divider>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-account</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{isAuthor ? "Author" : "Regular User"}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-heart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{favorites}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item  v-if="isAuthor">
            <v-list-item-action>
              <v-icon>mdi-pencil</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{authored}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-list-item>
            <v-list-item-action>
              <v-icon></v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-btn color ="red" @click='() => {listBooks(); favoritesDialog = true}'>Toggle Favorites</v-btn>
              <v-btn v-if="!isAuthor" color ="blue" @click='() => {listBooks(); ratingsDialog = true}' >Rate Book</v-btn>
              <v-btn v-if="!isAuthor" color ="green" @click='() => {listRatedBooks(); reviewDialog = true}' >Review Book</v-btn>
            </v-list-item-content>
          </v-list-item>
          <v-container>
            <v-row justify='center'>
                <v-dialog v-model='favoritesDialog' max-width='500px'>
                    <v-card>
                        <v-card-title>
                            <span class='text-h5'>Toggle Favorites</span>
                        </v-card-title>
                        <v-col cols='12'>
                            <v-select v-model="favoritesSelection" :persistent-hint="true" hint="If you select a favorite book, it will be unfav'ed" label="Select Book" :items='bookNamesArray'></v-select>
                        </v-col>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color='red darken-1' text @click='favoritesDialog = false'>
                                Cancel
                            </v-btn>
                            <v-btn color='blue darken-1' text @click='() => {favBook()}'>
                                Confirm
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
          </v-container>
          <v-container>
            <v-row justify='center'>
                <v-dialog v-model='ratingsDialog' max-width='500px'>
                    <v-card>
                        <v-card-title>
                            <span class='text-h5'>Rate Book</span>
                        </v-card-title>
                        <v-col cols='12'>
                            <v-select v-model="bookToRate" label="Book" :items='bookNamesArray'></v-select>
                        </v-col>
                        <v-col cols='12'>
                            <v-select v-model="ratingsSelection" label="Rate" :items='[1,2,3,4,5]'></v-select>
                        </v-col>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color='red darken-1' text @click='ratingsDialog = false'>
                                Cancel
                            </v-btn>
                            <v-btn color='blue darken-1' text @click='() => {rateBook()}'>
                                Confirm
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
          </v-container>
          <v-container>
            <v-row justify='center'>
                <v-dialog v-model='reviewDialog' max-width='500px'>
                    <v-card>
                        <v-card-title>
                            <span class='text-h5'>Rate Book</span>
                        </v-card-title>
                        <v-col cols='12'>
                            <v-select v-model="bookToReview" label="Book" :persistent-hint="true" hint="You can only write a review for books you have rated." :items='ratedBooksArray'></v-select>
                        </v-col>
                        <v-col cols='12'>
                            <v-text-field v-model="reviewText" label="Review" ></v-text-field>
                        </v-col>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color='red darken-1' text @click='reviewDialog = false'>
                                Cancel
                            </v-btn>
                            <v-btn color='blue darken-1' text @click='() => {reviewBook()}'>
                                Confirm
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
          </v-container>
        </v-list>
      </v-card>
    </v-col>
  </v-row>

 <FavoritesTable v-if="!isAuthor" :rew="reviewList"></FavoritesTable>

  </v-main>
</template>

<script>
import * as Realm from "realm-web";
//import FavoritesTable from "../components/FavoritesTable.vue";
const mongoApp = new Realm.App({ id: "bookreadsapp-cvhxl" });
const mongoCredentials = Realm.Credentials.anonymous();
async function login(app, credentials) {
    const receive = await app.logIn(credentials);
    console.assert(receive.id === app.currentUser.id);
    // console.log(receive)
    return receive;
}
async function getUser(user,username) {
    let u = await user;
    const allBooks = await u.functions.getUser(username);
    // console.log(allBooks);
    return allBooks;
}

async function getAllBooks(user) {
    let u = await user;
    const allBooks = await u.functions.listAllBooks();
    // console.log(allBooks);
    return allBooks;
}

async function favoriteBook(user,val) {
    let u = await user;
    const favoriteBookPromise = await u.functions.favoriteBook(val);
    // console.log(allUsers);
    return favoriteBookPromise;
}

async function ratingBook(user,val) {
    let u = await user;
    const ratingBookPromise = await u.functions.rateBook(val);
    // console.log(allUsers);
    return ratingBookPromise;
}

async function revBook(user,val) {
    let u = await user;
    const ratingBookPromise = await u.functions.reviewBook(val);
    // console.log(allUsers);
    return ratingBookPromise;
}

const mongoUser = login(mongoApp, mongoCredentials);


export default {
    async mounted() {
        this.isAuthor = this.$store.state.currentUser.isAuthor;
        if(this.$store.state.currentUser.username !== "DefaultUser"){
          this.getUser().then((data) => {
            console.log(data);
            this.id = data._id;
            this.booksRead = data.booksRead;
            this.totalRating = data.totalRating;
            this.avgRating = data.avgRating;
            this.isAuthor = data.isAuthor;
            this.favorites = data.favorites;
            this.ratings = data.ratings;
            this.reviews = data.reviews;
            this.authored = data.authored;
            this.sortReviews();
        });
        }
        
        
    },
    data: () => ({
        rating:0,
        reviews:"",
        books: [],
        bookNamesArray:[],
        ratedBooksArray:[],
        favoritesDialog:false,
        favoritesSelection:"",
        ratingsDialog:false,
        ratingsSelection:0,
        bookToRate:"",
        reviewDialog:false,
        bookToReview:"",
        reviewText:"",
        booksRead: 0,
        totalRating: 0,
        avgRating: 0,
        isAuthor: false,
        id: "",
        authored: [],
        favorites: [],
        ratings: {},
        reviews: {},
        reviewList:[],
    }),
    methods: {
        getUser: async function () {
            let dummy = await getUser(mongoUser, this.$store.state.currentUser.username);
            //console.log(this.books);
            return dummy;
        },
        listBooks: async function() {
            this.books = await getAllBooks(mongoUser);
            this.bookNamesArray = this.books.map(a => a.name)
            console.log(this.Books);
        },
        listRatedBooks: async function() {
            this.books = await getAllBooks(mongoUser);
            //this.bookNamesArray = this.books.map(a => a.name)
            this.ratedBooksArray = Object.keys(this.ratings);
            console.log(this.ratedBooksArray);
            console.log(this.Books);
        },
        favBook: async function() {
            favoriteBook(mongoUser,{username:this.$store.state.currentUser.username,book:this.favoritesSelection}).then((ret) =>{
              this.favorites = ret.favorites;
            });
            this.favoritesDialog = false;
            this.favoritesSelection = "";
        },
        rateBook: async function() {
          let payload = {username:this.$store.state.currentUser.username, book:this.bookToRate, rating:this.ratingsSelection}
          console.log(payload);
          ratingBook(mongoUser,payload).then((ret) =>{
              console.log(ret);
              this.booksRead = ret.booksRead;
              this.totalRating = ret.totalRating;
              this.avgRating = ret.avgRating;
              this.ratings = ret.ratings;
              this.sortReviews();
            });
            this.ratingsDialog = false;
            this.bookToRate = "";
            this.ratingsSelection = 0;
        },
        reviewBook: async function() {
          let payload = {username:this.$store.state.currentUser.username, book:this.bookToReview, review:this.reviewText}
          console.log(payload);
          revBook(mongoUser,payload).then((ret) =>{
              console.log(ret);
              this.reviews = ret.reviews;
              this.sortReviews();
            });
            this.reviewDialog = false;
            this.bookToReview = "";
            this.reviewText = "";
            
        },
        sortReviews: function(){
          if(this.isAuthor){
            return;
          }
          var liste = [];
          var liste2 = [];
          for(var i = 0; i < this.favorites.length; i++){          
            if(this.reviews.hasOwnProperty(this.favorites[i])){
                var json = {}
                json["book"] = this.favorites[i];
                json["rating"] = this.ratings[this.favorites[i]]
                json["review"] = this.reviews[this.favorites[i]]
                liste.push(json)
            }
          }
          for (const key of Object.keys(this.reviews)) {
            console.log(key);
            if(this.favorites.includes(key)){
              continue;
            }
            else{
              var json = {}
              json["book"] = key;
              json["rating"] = this.ratings[key]
              json["review"] = this.reviews[key]
              liste2.push(json);
            }
          }

          function compare( a, b ) {
            if ( a.rating < b.rating ){
              return 1;
            }
            if ( a.rating > b.rating ){
              return -1;
            }
            return 0;
          }

          liste2.sort(compare);

          
          this.reviewList = liste.concat(liste2);;
        }
    },
}
</script>

<style>

</style>