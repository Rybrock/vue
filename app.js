// console.log('Hello Vue')

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'patrick rothfus' },
                { title: 'the way of kins', author: 'brandon sanderson' },
                { title: 'IT', author: 'steven king' },
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
    }

})
app.mount('#app')