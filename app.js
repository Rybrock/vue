// console.log('Hello Vue')

const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            age: 45,
            author: 'Brandon Sanderson',
        }
    },
    methods: {
        // changeTitle(title) {
        //     console.log('You have clicked me')
        //     this.title = title;
        // }
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        }
    }
})
app.mount('#app')