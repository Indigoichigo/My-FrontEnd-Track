import uuid from 'uuid'

//CREATE_ARTICLE
export const createArticle = ({
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
export const editArticle = (id, updates) => ({
    type: 'EDIT_ARTICLE',
    id,
    updates
}) 

//DELETE_ARTICLE
export const deleteArticle = ({id} = {}) => ({
    type: 'EDIT_ARTICLE',
    id
}) 