import React, {Component} from 'react';
import AjouterRecette from './AjouterRecette';
import AdminForm from './AdminForm.js';

class Admin extends Component {
  render() {
    const { recettes, ajouterRecette, majRecette, loadExample } = this.props;
    return (
      <div className="cards">
        <AjouterRecette ajouterRecette={ajouterRecette} />
        {
            Object.keys(recettes)
                .map(
                    key => <AdminForm
                    key={key}
                    id={key}
                    majRecette={majRecette}
                    recettes={recettes}></AdminForm>)
        }
        <footer>
            <button onClick={loadExample}>Remplir</button>
        </footer>
      </div>
    );
  }
}

export default Admin;