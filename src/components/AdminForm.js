import React from 'react';

const AdminForm = ({ id, majRecette, recettes }) => {
  return(
    <div className="card">
        <form className="admin-form">
            <input type="text" name="nom" placeholder="Nom de la recette" />
            <input type="text" name="image" placeholder="Image" />
            <textarea name="ingredients" placeholder="Ingrédients"></textarea>
            <textarea name="instructions" placeholder="Instructions"></textarea>
        </form>
    </div>
  )
};

export default AdminForm;
