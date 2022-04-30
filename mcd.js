let productsarr = [
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1626342713/Item/5275.png", itemName: "Burger", btnval: 1 },
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466973/Item/3708.png", itemName: "Wedges", btnval: 2 },
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589380133/Item/59.png", itemName: "Fries", btnval: 3 },
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466970/Item/3673.png", itemName: "Muffins", btnval: 4 },
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1643886936/Item/19.png", itemName: "Coke", btnval: 5 },
    { fimg: "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1608782483/Items/5506.png", itemName: "Water", btnval: 6 },

];

productsarr.map(function (ele) {
    var parent_div = document.createElement("div");
    parent_div.setAttribute("id", "itemBox")
    var mealImg = document.createElement("img");
    mealImg.src = ele.fimg;
    var heading = document.createElement("h3");
    heading.textContent = ele.itemName;
    var selectbtn = document.createElement("input");
    selectbtn.setAttribute("type", "checkbox")
    selectbtn.setAttribute("id", "checkBox")
    selectbtn.value = ele.btnval;

    selectbtn.addEventListener("click", function () {
        if (this.checked == true) {
            orderitemsarr.push(ele.itemName)
            console.log(orderitemsarr)
        } else {
            orderitemsarr.pop()
            console.log(orderitemsarr)
        }

    });

    parent_div.append(mealImg, heading, selectbtn)

    document.querySelector("#allmeals").append(parent_div);
});

var orderitemsarr = [];


let orderId = Math.round(Math.random() * 10)
async function order() {

    let orderedItem = orderitemsarr.join(", ");

    if (orderitemsarr.length != 0) {
        alert(`Your order of order ID #${orderId} placed successfully for ${orderedItem}. Kindly Wait !`);
    } else {
        alert("Kindly Select Your Item From Menu !")
    }

    try {
        let keepPromise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (orderitemsarr.length != 0) {
                    resolve("Your order is ready. Take it from the Counter")
                } else {
                    reject("Select Your Items")
                }
            }, 5000);
        })
        let res = await keepPromise;
        alert("Your Order is ready. Take it from the Counter.");
        showItems(res);
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}

function showItems(res) {

    document.querySelector("#items_image").innerHTML = "";
    document.querySelector("#orderid").textContent = `Order ID: ${orderId}`;

    orderitemsarr.map(function (el) {
        let ordered_img = document.createElement("img");
        ordered_img.setAttribute("id", "orderimg");

        if (el == "Burger") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1626342713/Item/5275.png")
        } else if (el == "Wedges") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466973/Item/3708.png")
        } else if (el == "Fries") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589380133/Item/59.png")
        } else if (el == "Muffins") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1589466970/Item/3673.png")
        } else if (el == "Coke") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1643886936/Item/19.png")
        } else if (el == "Water") {
            ordered_img.setAttribute("src", "https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/f_auto,q_auto,w_250/v1608782483/Items/5506.png")
        }

        document.querySelector("#items_image").append(ordered_img)
    })
}