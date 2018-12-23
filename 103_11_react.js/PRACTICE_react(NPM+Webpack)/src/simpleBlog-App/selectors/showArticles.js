// Get article

export default (articles, { text, sortBy }) => {
    return articles.filter((article) => {
        const textMatch = article.title.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    });
};
