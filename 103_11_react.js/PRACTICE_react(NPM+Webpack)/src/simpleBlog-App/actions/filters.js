//SET_TEXT_FILTER
const setTextFilter = (text ='') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

//SORT_BY_CATEGORY
const sortByCategory = (category ='') => ({
    type: 'SORT_BY_DATE',
    category,
})