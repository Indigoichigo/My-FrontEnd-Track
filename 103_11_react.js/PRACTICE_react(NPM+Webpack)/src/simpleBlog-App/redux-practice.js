//(1).引入 createStore, combineReducers
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//CREATE_ARTICLE
const createArticle = ({
        id = '',
        title = '',
        content = '',
        category = '',
        createdAt = 0,
    } = {}) => ({
        type: 'CREATE_ARTICLE',
        article: {
            id: uuid(),
            id,
            title,
            content,
            category,
            createdAt,
        }
})
//EDIT_ARTICLE
const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
}) 

//DELETE_ARTICLE
const deleteArticle = ({id} = {}) => ({
    type: 'EDIT_ARTICLE',
    id
}) 

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


//(5).建Reducers
    //先建一個defalut
const defaultArticles = [];

const articlesReducer = (state = defaultArticles, action) => {
    switch(action.type) {
        case "CREATE_ARTICLE":
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


const defaultFilters = {
    text: 'some text',
    sortBy: 'date'
}

const filtersReducer = (state = defaultFilters, action) => {
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




//(2).Store creation
//用一個變數建createStore
    //多個reducer可以用combineReducers
const store = createStore(
    combineReducers({
        articles: articlesReducer,
        filters: filtersReducer,
    })
);

//(3).用createStore的subscribe方法建立一個註冊
    //取得變化的state
    //取得處理過的值
store.subscribe(() => {
    const state = store.getState();
    console.log(state);
})

//(4).建一筆資料格式，通常是物件

const articleData = {
    //第一個寫資料內容，為一個陣列
    articles: [{
        id: 'asdf',
        title: 'My title',
        content: 'My content',
        category: 'travel',
        createdAt: 0,
    }],

    filters: {
        text: 'some title',
        sortBy: 'date', //date or category
    }   
}

const articleOne = store.dispatch(createArticle({ title: 'TEST', content: 'haha'}))
