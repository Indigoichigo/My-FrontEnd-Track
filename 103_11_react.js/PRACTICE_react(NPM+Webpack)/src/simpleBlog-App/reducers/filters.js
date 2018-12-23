const defaultFilters = {
    text: 'some text',
    sortBy: 'date'
}

export default  (state = defaultFilters, action) => {
    switch(action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: 'date'
            };
        case "SORT_BY_CATEGORY":
            return {
                ...state,
                startDate: 'category'
            };
        default: 
            return state;
    }
}