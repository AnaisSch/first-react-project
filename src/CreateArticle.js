import React, { useState } from 'react';

const CreateArticle = () => {
    const [ title, setTitle ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("titre", title);
    }
    const handleChange = (event) => {
        console.log("Target name: ", event.target.name);
        console.log("Target value: ", event.target.value);

        setTitle(event.target.value.substring(0, 10));
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
                        type="textarea"
                        id="content"
                        name="content">
                    </textarea>
                </div>
                <div>
                    <label>Id de l'auteur :</label>
                    <input
                        type="text"
                        id="auteur"
                        name="author" />
                </div>
                <div>
                    <button type="submit">Envoyer</button>
                </div>
        </fieldset>
    </form>
    )
};
export default CreateArticle;