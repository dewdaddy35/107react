//create a dictionary with 3 categories
let catalog =[
    {
        "title": "Running Shoes",
        "catagory":"Shoes",
        "price":45.00,
        "image": "blackrunners.jpg",
        "ProductId": "1",//placeholder
    },
    {
        "title": "Basketball Shoes",
        "catagory":"Shoes",
        "price":105.00,
        "image": "hightops.jpg",
        "ProductId": "2",//placeholder
    },
    {
        "title": "Kangol",
        "catagory":"Hats",
        "price":55.00,
        "image": "kangol.jpg",
        "_id": "3",//placeholder

    },
    {
        "title": "Ball Caps",
        "catagory":"Hats",
        "price":30.00,
        "image": "three style caps.jpg",
        "_id": "4",//placeholder
        
    },
    {
        "title": "Polo Shirt",
        "catagory":"Clothing",
        "price":55.00,
        "image": "Polo Shirt.jpg",
        "_id": "5",//placeholder
        
    },
    {
        "title": "Sweat Jacket",
        "catagory":"Clothing",
        "price":85.00,
        "image": "SweatJacket.jpg",
        "_id": "6",//placeholder
        
    },
    {
        "title": "Jacket",
        "catagory":"Clothing",
        "price":250.00,
        "image": "Jacket.jpg",
        "_id": "7",//placeholder
        
    },
    {
        "title": "Running Shoes",
        "catagory":"Shoes",
        "price":75.00,
        "image": "bluerunners.jpg",
        "_id": "8",//placeholder
        
    }

];
class DataService {
   
    getProducts(){
        //retrieve the product to display
        return catalog;
    }
}

export default DataService;