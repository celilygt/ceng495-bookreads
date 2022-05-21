<template>
  <ListBook items-per-page="5" :bookList="this.books" />
</template>

<script>
import * as Realm from "realm-web";
const mongoApp = new Realm.App({ id: "bookreadsapp-cvhxl" });
const mongoCredentials = Realm.Credentials.anonymous();
async function login(app, credentials) {
    const receive = await app.logIn(credentials);
    console.assert(receive.id === app.currentUser.id);
    // console.log(receive)
    return receive;
}
async function getAllBooks(user) {
    let u = await user;
    const allBooks = await u.functions.listAllBooks();
    // console.log(allBooks);
    return allBooks;
}
const mongoUser = login(mongoApp, mongoCredentials);

export default {
    async mounted(){
        await this.listBooks();
    },
    data: () => ({
        books:[],
    }),
    methods:{
        listBooks: async function() {
            getAllBooks(mongoUser).then((res) => {
                this.books = res;
                for(var i = 0; i < this.books.length; i++){
                    console.log(this.books[i].reviewedBy)
                    this.books[i].reviewedBy = JSON.stringify(this.books[i].reviewedBy);
                }
                console.log(this.books);
            });
            
            console.log(this.books);
        },
    }
}
</script>

<style>

</style>