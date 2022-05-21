# ralli

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

Celil Yiğit 2310704

##############################

URL: https://bookreadsapp-cvhxl.mongodbstitch.com/
Bonuses: Pagination
Documents:
* Fiction book:
################################################
{
   "_id":{
      "$oid":"62893caf40560ffa0278482d"
   },
   "name":"AFictionBook",
   "authors":[
      "FictionAuthor"
   ],
   "translators":"FictionTranslator",
   "editors":"FictionEditor",
   "cover":"https://coolimages/AFictionBook",
   "fiction":true,
   "publisher":"FictionPublisher",
   "genre":"Fantasy",
   "year":"2005",
   "avgRating":{
      "$numberDouble":"2.5"
   },
   "totalRating":{
      "$numberInt":"10"
   },
   "readNumber":{
      "$numberDouble":"4.0"
   },
   "ratedBy":{
      "Likes Everything":{
         "$numberInt":"5"
      },
      "Kinda Confused":{
         "$numberInt":"1"
      },
      "EkşiSözlük Writer":{
         "$numberInt":"1"
      },
      "RegularUser":{
         "$numberInt":"3"
      }
   },
   "reviewedBy":{
      "Likes Everything":"Unbelievably Good Fiction",
      "Kinda Confused":"Liked it very much",
      "EkşiSözlük Writer":"Terrible"
   }
}
################################################
* Non-fiction book with multiple authors:
################################################
{
   "_id":{
      "$oid":"62893d8fe7c15e155dfaf7c6"
   },
   "name":"NonFictionBookMultipleAuth",
   "authors":[
      "Author1",
      "Author2",
      "Author3"
   ],
   "translators":"NonFictionTranslator",
   "editors":"NonFictionEditor",
   "cover":"\"https://coolimages/NonFictionBook\"",
   "fiction":false,
   "publisher":"NFPublishing",
   "genre":"",
   "year":"2014",
   "avgRating":{
      "$numberDouble":"3.5"
   },
   "totalRating":{
      "$numberInt":"14"
   },
   "readNumber":{
      "$numberDouble":"4.0"
   },
   "ratedBy":{
      "Likes Everything":{
         "$numberInt":"5"
      },
      "Kinda Confused":{
         "$numberInt":"5"
      },
      "EkşiSözlük Writer":{
         "$numberInt":"1"
      },
      "RegularUser":{
         "$numberInt":"3"
      }
   },
   "reviewedBy":{
      "Likes Everything":"Unbelievably Good NonFiction",
      "Kinda Confused":"Terrible",
      "EkşiSözlük Writer":"Multiple authors is not a good idea"
   }
}
################################################
* Translated Book
################################################
{
   "_id":{
      "$oid":"62893caf40560ffa0278482d"
   },
   "name":"AFictionBook",
   "authors":[
      "FictionAuthor"
   ],
   "translators":"FictionTranslator",
   "editors":"FictionEditor",
   "cover":"https://coolimages/AFictionBook",
   "fiction":true,
   "publisher":"FictionPublisher",
   "genre":"Fantasy",
   "year":"2005",
   "avgRating":{
      "$numberDouble":"2.5"
   },
   "totalRating":{
      "$numberInt":"10"
   },
   "readNumber":{
      "$numberDouble":"4.0"
   },
   "ratedBy":{
      "Likes Everything":{
         "$numberInt":"5"
      },
      "Kinda Confused":{
         "$numberInt":"1"
      },
      "EkşiSözlük Writer":{
         "$numberInt":"1"
      },
      "RegularUser":{
         "$numberInt":"3"
      }
   },
   "reviewedBy":{
      "Likes Everything":"Unbelievably Good Fiction",
      "Kinda Confused":"Liked it very much",
      "EkşiSözlük Writer":"Terrible"
   }
}
################################################
* Book with an editor and multiple authors
################################################
{
   "_id":{
      "$oid":"62893d8fe7c15e155dfaf7c6"
   },
   "name":"NonFictionBookMultipleAuth",
   "authors":[
      "Author1",
      "Author2",
      "Author3"
   ],
   "translators":"NonFictionTranslator",
   "editors":"NonFictionEditor",
   "cover":"\"https://coolimages/NonFictionBook\"",
   "fiction":false,
   "publisher":"NFPublishing",
   "genre":"",
   "year":"2014",
   "avgRating":{
      "$numberDouble":"3.5"
   },
   "totalRating":{
      "$numberInt":"14"
   },
   "readNumber":{
      "$numberDouble":"4.0"
   },
   "ratedBy":{
      "Likes Everything":{
         "$numberInt":"5"
      },
      "Kinda Confused":{
         "$numberInt":"5"
      },
      "EkşiSözlük Writer":{
         "$numberInt":"1"
      },
      "RegularUser":{
         "$numberInt":"3"
      }
   },
   "reviewedBy":{
      "Likes Everything":"Unbelievably Good NonFiction",
      "Kinda Confused":"Terrible",
      "EkşiSözlük Writer":"Multiple authors is not a good idea"
   }
}
################################################
* Regular User
################################################
{
   "_id":{
      "$oid":"62893e7f40560ffa02786317"
   },
   "username":"RegularUser",
   "isAuthor":false,
   "favorites":[
      
   ],
   "read":[
      
   ],
   "reviews":{
      
   },
   "ratings":{
      "AFictionBook":{
         "$numberInt":"3"
      },
      "NonFictionBookMultipleAuth":{
         "$numberInt":"3"
      },
      "LikeableBook":{
         "$numberInt":"3"
      },
      "Book of Manhood":{
         "$numberInt":"3"
      },
      "The Metamorphosis":{
         "$numberInt":"3"
      },
      "mAAd City":{
         "$numberInt":"3"
      },
      "CENG495 Textbook":{
         "$numberInt":"3"
      },
      "METU Spring Fest":{
         "$numberInt":"5"
      },
      "Valley of Wolves":{
         "$numberInt":"5"
      },
      "Last Dance":{
         "$numberInt":"5"
      },
      "Brave Heart":{
         "$numberInt":"4"
      }
   },
   "avgRating":{
      "$numberDouble":"3.6363636363636362"
   },
   "totalRating":{
      "$numberInt":"40"
   },
   "booksRead":{
      "$numberDouble":"11.0"
   }
}
################################################
* Author
################################################
{
   "_id":{
      "$oid":"6289402040560ffa02787fa4"
   },
   "username":"Franz Kafka",
   "isAuthor":true,
   "favorites":[
      "The Metamorphosis"
   ],
   "authored":[
      "The Metamorphosis"
   ]
}
################################################

Design Choices:

I decided to use Vue again due to my familiarity with it, however, I was surprised in a bad way by the MongoDB Realm. 
It did not render my project, well, at least I couldn't make it work. Therefore I started building a single index.html
by adding Vue & Vuetify from CDN links. I quickly figured out this was madness, and I figured out that I needed to convert
my Vue project to static files. That was how I learned about Nuxt.js, (a framework for a JS framework, really poetic...).

I mainly used Nuxt.js, and by using it, I mainly used Vue, Vue-Router for routing, Vuex for state management, and Vuetify for
custom frontend components.

I divided my application to three routes, main page to handle creation/deletion of users/books, and switching user functionalities.
App starts with a Default User, which has no DB connection, just a placeholder. In order to experience users page capabilities, one
should switch to one of available users.

In user page, Star icon denotes Average Rating, and Book icon denotes Number of Books Read. Heart icon shows favorite books of the user.
I enabled 5 favorite books at most, after that oldest favorite is deleted.

I implemented FavoriteBook functionality such that it toggles, i.e. using it once for a book adds it to favorites, second time removes it.

I implemented reviews only for rated books, as I had very little time to deal with it.

In the 3rd and final page, there is a data table with pagination. I aimed for bonus at there, by limiting books per page to 5. It lists
all books available.

I did not have time for real books and real data, so I made up some things by myself. I apologize in advance.