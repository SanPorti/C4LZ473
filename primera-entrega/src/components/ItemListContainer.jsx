import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Loading from "./Loading";

const ItemListContainer = () => {
    const [items, setItems] = useState ([]);
    const {id} = useParams ();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");

        getDocs(itemsCollection)
            .then(snapShot => {
                if (snapShot.docs.length > 0) {
                    const allItems = snapShot.docs.map(documento => ({
                        id: documento.id,
                        ...documento.data()
                    }));

                    const filteredItems = id
                        ? allItems.filter(item => item.genero === id)
                        : allItems;

                    setItems(filteredItems);
                    setLoading(false);
                } else {
                    console.log("Error! No existe la colección.");
                }
            })
    }, [id]);

    return (
        <>
            <div className="container">
                <div className="row ">
                    {loading ? <Loading /> : <ItemList items={items} />}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer

