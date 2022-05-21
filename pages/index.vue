<template>
    <v-main>
        <v-row justify="center">
            <v-col cols="4">
                <AddBook @savedBook="onAddBook" />
            </v-col>
            <v-col cols="4">
                <v-container>
                    <v-card class="yellow darken-3" max-height="160px">
                        <v-card-title class='text-h5'>
                            Delete Book
                        </v-card-title>
                        <v-card-subtitle>Select one of the existing books to delete it permanently.
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn outlined @click='() => {listBooks(); deleteBookDialog = true}'>
                                <v-icon>mdi-close</v-icon>Remove </v-btn>
                        </v-card-actions>
                        <v-container>
                            <v-row justify='center'>
                                <v-dialog v-model='deleteBookDialog' max-width='500px'>
                                    <v-card>
                                        <v-card-title>
                                            <span class='text-h5'>Remove Book</span>
                                        </v-card-title>
                                        <v-col cols='6'>
                                            <v-select v-model="deleteBookSelection" label="Select Book to Remove" :items='mongoBooks.map(a => a.name)'></v-select>
                                        </v-col>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color='red darken-1' text @click='deleteBookDialog = false'>
                                                Cancel
                                            </v-btn>
                                            <v-btn color='blue darken-1' text @click='() => {deleteBook()}'>
                                                Remove
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-container>
            </v-col>
            <v-col cols="4">
                <AddUser @savedUser="onAddUser"/>
            </v-col>
            <v-col cols="4">
              <v-container>
                    <v-card class="green darken-3" max-height="160px">
                        <v-card-title class='text-h5'>
                            Delete User
                        </v-card-title>
                        <v-card-subtitle>Select one of the existing user to delete him/her permanently.
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn outlined @click='() => {listUsers(); deleteUserDialog = true}'>
                                <v-icon>mdi-close</v-icon>Remove </v-btn>
                        </v-card-actions>
                        <v-container>
                            <v-row justify='center'>
                                <v-dialog v-model='deleteUserDialog' max-width='500px'>
                                    <v-card>
                                        <v-card-title>
                                            <span class='text-h5'>Remove User</span>
                                        </v-card-title>
                                        <v-col cols='6'>
                                            <v-select v-model="deleteUserSelection" label="Select User to Remove" :items='mongoUsers.map(a => a.username)'></v-select>
                                        </v-col>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color='red darken-1' text @click='deleteUserDialog = false'>
                                                Cancel
                                            </v-btn>
                                            <v-btn color='blue darken-1' text @click='() => {deleteUser()}'>
                                                Remove
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-container>
            </v-col>
            <v-col cols="4">
              <v-container>
                    <v-card class="orange darken-3" max-height="160px">
                        <v-card-title class='text-h5'>
                            Switch to User
                        </v-card-title>
                        <v-card-subtitle>Select one of the existing users to use the app in their perspective.
                        </v-card-subtitle>
                        <v-card-actions>
                            <v-btn outlined @click='() => {listUsers(); switchUserDialog = true}'>
                                <v-icon>mdi-account-switch</v-icon>Switch </v-btn>
                        </v-card-actions>
                        <v-container>
                            <v-row justify='center'>
                                <v-dialog v-model='switchUserDialog' max-width='500px'>
                                    <v-card>
                                        <v-card-title>
                                            <span class='text-h5'>Select User</span>
                                        </v-card-title>
                                        <v-col cols='12'>
                                            <v-select v-model="switchSelection" label="Select User to Switch to" :items='mongoUsers.map(a => a.username)'></v-select>
                                        </v-col>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color='red darken-1' text @click='switchUserDialog = false'>
                                                Cancel
                                            </v-btn>
                                            <v-btn color='blue darken-1' text @click='() => {switchUser()}'>
                                                Switch
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-dialog>
                            </v-row>
                        </v-container>
                    </v-card>
                </v-container>
            </v-col>
        </v-row>
    </v-main>
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
async function getAllUsers(user) {
    let u = await user;
    const allUsers = await u.functions.listAllUsers();
    // console.log(allUsers);
    return allUsers;
}
async function insertBook(user,val) {
    let u = await user;
    const addBookPromise = await u.functions.addBook(val);
    // console.log(allUsers);
    return addBookPromise;
}
async function insertUser(user,val) {
    let u = await user;
    const addUserPromise = await u.functions.addUser(val);
    // console.log(allUsers);
    return addUserPromise;
}
async function removeUser(user,val) {
    let u = await user;
    const removeUserPromise = await u.functions.deleteUser(val);
    // console.log(allUsers);
    return removeUserPromise;
}

/*async function removeBook(user,val) {
    let u = await user;
    const removeBookPromise = await u.functions.deleteBook(val);
    // console.log(allUsers);
    return removeBookPromise;
}*/

async function removeBook(user,val) {
    let u = await user;
    const removeBookPromise = await u.functions.deleteBook(val);
    // console.log(allUsers);
    return removeBookPromise;
}

const mongoUser = login(mongoApp, mongoCredentials);
// const allBooks = getAllBooks(mongoUser);
// const allUsers = getAllUsers(mongoUser);

export default {
    head() {
    return {
      title: "Main Page"
    };
  },
    name: "IndexPage",
    data: () => ({
        mongoBooks: [],
        mongoUsers: [],
        deleteBookDialog: false,
        deleteUserDialog: false,
        switchUserDialog: false,
        deleteUserSelection: "",
        deleteBookSelection: "",
        switchSelection: "",
        // mongoApp: null,
        // mongoCredentials: null,
        // mongoUser: null,
        // mongoBooks: null,
    }),
    methods: {
        listBooks: async function() {
            this.mongoBooks = await getAllBooks(mongoUser);
            console.log(this.mongoBooks);
        },
        listUsers: async function() {
            this.mongoUsers = await getAllUsers(mongoUser);
            //console.log(this.mongoUsers);
        },
        deleteBook: async function() {
            this.mongoBooks = await removeBook(mongoUser,this.deleteBookSelection);
            //ABI BURADAN DUMMY'yi kaldirdim he haberin ola
            this.deleteBookDialog = false;
            this.deleteBookSelection = "";
        },
        deleteUser: async function() {
            this.mongoUsers = await removeUser(mongoUser,this.deleteUserSelection);
            this.deleteUserDialog = false;
            this.deleteUserSelection = "";
        },
        switchUser: function(){
          let sU = this.mongoUsers.find(o => o.username === this.switchSelection);
          this.$store.commit('switch_user',{username:sU.username,isAuthor:sU.isAuthor});
          this.switchUserDialog = false
        },
        onAddBook: async function (value) {
             let dummy = await insertBook(mongoUser,value);
             console.log(dummy);
        },
        onAddUser: async function (value) {
            let dummy = await insertUser(mongoUser,value);
            console.log(dummy) // someValue
        },
    },
}
</script>
