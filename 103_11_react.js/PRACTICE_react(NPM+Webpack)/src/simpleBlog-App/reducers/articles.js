const defaultArticles = [];

export default (state = defaultArticles, action) => {
    switch(action.type) {
        case "CREATE_ARTICLE":
            console.log('create article', action.article)
            return ([
                ...state,
                action.article
            ])
        case "EDIT_ARTICLE":
            return state.map((article) => {
                if (expense.id === action.id) {
                    return {
                        ...article,
                        ...action.updates
                    }
                } else {
                    return article
                }
            });
        case "DELETE_ARTICLE":
            return state.filter(({id}) => id !== action.id)
        default:
            return state;
    }
}