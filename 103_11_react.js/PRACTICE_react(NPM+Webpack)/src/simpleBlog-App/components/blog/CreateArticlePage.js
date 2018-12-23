import React from 'react';

const CreateArticlePage = () => (
    <div id="createArticlePage">
        <section className="createarticle">
            <form>
                <p>Article Title</p>
                <input type="text"/>
                <p>Article Content</p>
                <textarea></textarea>
                <button>Create Article</button>
            </form>
        </section>
        

    </div>
);

export default CreateArticlePage;