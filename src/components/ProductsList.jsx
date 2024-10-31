
// Lista di Prodotti
// Descrizione: Crea un componente ProductList che riceve un array di oggetti prodotto come prop. Ogni prodotto deve avere id, name, price, image, e description. Il componente dovrebbe mappare l'array e visualizzare una lista di ProductCard con le informazioni del prodotto.
// Grafica:
// Una griglia di card prodotto con immagine in alto, nome e prezzo in evidenza.
// Usa uno stile semplice e pulito con colori a contrasto per nome e prezzo.
// Aggiungi un pulsante "Aggiungi al carrello" sotto ogni descrizione.
// La griglia deve essere responsiva, adattandosi al numero di colonne in base alla larghezza della finestra.

import { products } from "../products";

let arrayProducts = [];

function Products() {
    arrayProducts = products.map((product) => 
        <div className="w-full bg-white border border-gray-200 shadow" key={product.id}>
            <div className="w-full flex justify-center">
                <img className="h-80" src={product.image} alt="" />
            </div>
            <div className="p-5 relative h-40">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-800">{product.name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                <p className="text-red-600  font-bold absolute bottom-5 left-5">{product.price}€</p>
            </div>
        </div>
    )

    return (
    <div className="grid grid-cols-4 gap-5 p-10">
        {arrayProducts}
    </div>
    )
    
}

export default Products