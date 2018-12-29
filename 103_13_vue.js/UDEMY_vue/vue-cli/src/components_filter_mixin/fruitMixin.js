export default {
    data() {
        return {
            fruits: ['apple', 'banana', 'grape', 'mango'],
            filterText: ''
        }
    },
    computed: {
        fruitFilter() {
            return this.fruits.filter((item) => (item.match(this.filterText)))
        }
    },
    
}