// Data Bases
var userCart = []
var produceDataBase = [
    { id: 1, name: "MacBook Air", price: 999, color: "silver", index: 0 },
    { id: 2, name: "MacBook Air Pro", price: 1199, color: "gray", index: 1 },
    { id: 3, name: "MacBook Pro 13", price: 1299, color: "black", index: 2 },
    { id: 4, name: "MacBook Air", price: 858, color: "white", index: 3 },
    { id: 5, name: "iphone 14 Pro", price: 1850, color: "silver", index: 4 },
    { id: 6, name: "iphone 14", price: 1050, color: "gray", index: 5 },
    { id: 7, name: "iphone 13", price: 750, color: "black", index: 6 },
    { id: 8, name: "iphone xs", price: 490, color: "white", index: 7 },
    { id: 9, name: "Apple Watch Series 8", price: 300, color: "orang", index: 8 },
    { id: 10, name: "Apple Watch SE", price: 250, color: "black", index: 9 },
    { id: 11, name: "Apple Watch Ultra", price: 350, color: "white", index: 10 }
]

function send_product(id, Did) {
    var produce_name = ""
    var produce_price = ""
    var produce_id = 0
    var produce_color = ""
    var produce_index = 0
    var check_Out = 0
    var isProduceExisting = produceDataBase.some(function (item) {
        produce_name = item.name
        produce_price = item.price
        produce_id = item.id
        produce_color = item.color
        produce_index = item.index
        return item.id == id
    })

    if (isProduceExisting) {

        console.clear()

        var newItem = {
            id: produce_id,
            name: produce_name,
            price: produce_price,
            color: produce_color
        }
        userCart.push(newItem)

        delete produceDataBase[produce_index]

        alert(" شما " + produce_name + " را به سبد خود اظافه کردید")

        document.getElementById(Did).style.display = "block"

        document.getElementById(id).style.display = "none"

        userCart.forEach(function (sumprice) {
            console.log(sumprice)
            check_Out += sumprice.price

        })

        alert("صورتحساب شما تا الان : " + check_Out)

    }
    else {
        alert("با عرض پوزش *-- موجودی کالا به اتمام رسیده است ---*")
    }

}






function delete_From_Cart(Did, Pid) {
    console.clear()
    var produceIndex = userCart.findIndex(function (item) {
        return item.id == Pid
    })
    userCart.splice(produceIndex, 1)
    userCart.forEach(function (sumprice) {
        console.log(sumprice)
    })
    document.getElementById(Did).style.display = "none"
    document.getElementById(Pid).style.display = "block"


}