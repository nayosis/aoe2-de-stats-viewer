
import categoriesData  from "../data/category.json"

export function  getCategorieById (id) {
    console.log ( "Recherche de la categorie "+ id )
    const category =  categoriesData.find( cat => cat.class == id )
    return category
}

export function  getAllCaegories () {
  
    return categoriesData
}

