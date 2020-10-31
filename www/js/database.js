const listRes = [
    {
        r_name: 'Restaurant 1',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 2',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 3',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 4',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },{
        r_name: 'Restaurant 5',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 6',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 7',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    },
    {
        r_name: 'Restaurant 8           ',
        r_type: 'Demo',
        date_time: 'abc',
        r_price: '300000',
        ser_rating: '5',
        clean_rating: '4',
        food_rating: '3',
        r_note: ''
    }
]

var db;
var request = window.indexedDB.open("Restaurant-Database", 2);
request.onupgradeneeded = function(event) {
    var db = event.target.result;
    var objectStore = db.createObjectStore("RestaurantDatabase", {keyPath: "id", autoIncrement: true});
    for (var i in listRes) {
        objectStore.add(listRes[i])
    }
}

request.onsuccess = function(event) {
    db = request.result;
    console.log("Success: " + db);
}

function getAllData(collectionName) {
    const transaction = db.transaction([collectionName], "readonly");
    const objectStore = transaction.objectStore(collectionName);
    request = objectStore.getAll();
    return request;
}
$(window).on('load', function(){
    let result = getAllData("RestaurantDatabase")
    result.onsuccess = function(event){
        let data = event.target.result
        for(let i in data){
            let newcontent = `<div class="col-md-4 text-center col-sm-6 col-xs-6">
        <div class="thumbnail product-box">
            <div class="caption">
                <h3><a href="#">${data[i].r_name}</a></h3>
                <a href="feedback.html"><button type="button" class="btn btn-info">Delete</button></a> 
                <a href="details.html" id="details"><button type="button" class="btn btn-info" >Feedback</button></a>
            </div>
        </div>
        </div>`

        $('.app').append(newcontent)
        }
        
    }
})
$(document).ready(function(){
    $('#details').on('click', function(){
        alert('test')
    })
})
