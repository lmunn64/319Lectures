import { useState, useEffect } from "react";


function App() {
    const [product, setProduct] = useState([]);
    const [oneProduct, setOneProduct] = useState([]);
    const [categoryProduct, setCategoryProduct] = useState([]);
    // new Product
    const [addNewProduct, setAddNewProduct] = useState({
        id: 0,          
        title: "",
        price: 0.0,
        description: "",
        category: "",
        image: "",
        rating: 0.0,
    });

    const [viewer1, setViewer1] = useState(false);
    const [viewer2, setViewer2] = useState(false);
    const [viewer3, setViewer3] = useState(false);

    const showAllItems = product.map((el) => (
        <div key={el.id}>
        <img src={el.image} width={30} alt="images" /> <br />
        Title: {el.title} <br />
        Category: {el.category} <br />
        Price: {el.price} <br />
        Rating :{el.rating} <br />
        </div>
    ));
    const showOneItem = oneProduct.map((el) => (
        <div key={el.id}>
        <img src={el.image} width={30} alt="images" /> <br />
        Title: {el.title} <br />
        Category: {el.category} <br />
        Price: {el.price} <br />
        Rating: {el.rating} <br />
        </div>
    ));

    const showCategory = categoryProduct.map((el) => (
        <div key={el.id}>
        <img src={el.image} width={30} alt="images" /> <br />
        Title: {el.title} <br />
        Category: {el.category} <br />
        Price: {el.price} <br />
        Rating: {el.rating} <br />
        </div>
    ));
    useEffect(() => {
        getAllProducts();
    }, []);

    function getAllProducts() {
        fetch("http://127.0.0.1:4000/catalog")
        .then((response) => response.json())
        .then((data) => {
            console.log("Show Catalog of Products :");
            console.log(data);
            setProduct(data);
        });
        setViewer1(!viewer1);
    }
    function getOneProduct(id) {
        console.log(id);
        if (id >= 1 && id <= 20) {
            fetch("http://127.0.0.1:4000/catalog/" + id)
            .then((response) => response.json())
            .then((data) => {
            console.log("Show one product :", id);
            console.log(data);
            setOneProduct(data);
            });
            if (false === viewer2)
                setViewer2(true);
        } 
        else {
            console.log("Wrong number of Product id.");
        }
    }
    function getProductbyCategory(category) {
        console.log(category);
        if (category.length > 0) {
            fetch("http://127.0.0.1:4000/catalog/" + category)
            .then((response) => response.json())
            .then((data) => {
            console.log("Show products of category:", category);
            console.log(data);
            setOneProduct(data);
            });
            if (false === viewer3)
                setViewer3(true);
        } 
        else {
            console.log("Wrong product category.");
        }
    }
    return ( 
    <div>
        <h1>Catalog of Products</h1>

        <div>
        <h3>Show Products by Category:</h3>
        <input type="text" id="message" name="message" placeholder="category" onChange={(e) => getProductbyCategory(e.target.value)} />
        {viewer3 && showCategory }
        </div>
    </div>
    ); // return end
} // App end

export default App;