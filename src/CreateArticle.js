import React, { useState } from 'react';

const CreateArticle = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("titre", title);
        console.log("content", content);
        console.log("author", author);
    }
    const handleChange = (event) => {
        console.log("Target name: ", event.target.name);
        console.log("Target value: ", event.target.value);

        switch (event.target.name) {
            case "title":
                setTitle(event.target.value);
                break;
            case "content":
                setContent(event.target.value);
                break;
            case "author":
                setAuthor(event.target.value);
                break;
            // no default
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            <fieldset>
                <legend>Formulaire d'ajout d'articles</legend>
                <div>
                    <label>Ecrivez le titre :</label>
                    <input
                        type="text"
                        id="titre"
                        name="title"
                        onChange={handleChange}
                        value={title} />
                </div>
                <div>
                    <label>Ecrivez un contenu :</label>
                    <textarea
                        name="content"
                        onChange={handleChange}
                        value={content}
                        type="textarea"
                        id="content"
                    />
                </div>
                <div>
                    <label>Id de l'auteur :</label>
                    <input
                        name="author"
                        onChange={handleChange}
                        value={author}
                        type="text"
                        id="auteur"
                         />
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
        </fieldset>
    </form>
    )
};
export default CreateArticle;