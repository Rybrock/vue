// console.log('Hello Vue')

const app = Vue.createApp({
    data() {
        return {
            url: 'ry.brock@ymail.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfus', img: 'assets/1.jpg', isFave: true },
                { title: 'the way of kins', author: 'brandon sanderson', img: 'assets/2.jpg', isFave: false },
                { title: 'IT', author: 'steven king', img: 'assets/3.jpg', isFave: true },
            ]
        }
    },
    methods: {
        // changeTitle(title) {
        //     console.log('You have clicked me')
        //     this.title = title;
        // }
        // ### EVENTS ###
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        // ### Challenge
        // passing in (book) as an argument from the template
        toggleisFave(book) {
            book.isFave = !book.isFave;
        }
        // handleEvent(e, data) {
        //     console.log(e, e.type)
        //     if (data) {
        //         console.log(data);
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX;
        //     this.y = e.offsetY;
        //     console.log(x, y);
        // },
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFave)
        }
    }

})
app.mount('#app')

// Challenge - Add to Faves
// - Attatch a click event to each li tag
// - When a user clicks an li, toggle the isFave property of that book