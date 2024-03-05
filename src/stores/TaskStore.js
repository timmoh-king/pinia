import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "Buy groceries", isFav: false},
            {id: 2, title: "Travel to town", isFav: true},
            {id: 2, title: "Work till midnight", isFav: true}
        ]
    }),
    getters: {
        favs() {
            return this.tasks.filter(t => t.isFav === true)
        },
        favCount() {
            return this.tasks.reduce((prev, curr) => {
                return curr.isFav ? prev + 1 : prev
            }, 0)
        },
        totalCount: (state) => {
            return state.tasks.length
        }
    }
})
