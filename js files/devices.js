async function getdeviceinfo() {
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
            .then(res => res.json())
    }
    catch (err) {
        console.log(err)
    }
    finally { }
}

// function printdevices(){

//     getdeviceinfo().then((answer)=> {answer.forEach(element => {   

//         for (const key in element) {
//             main.innerHTML+= `${key} : ${element[key]}` ;
//         }
// })})

// }
// printdevices();




function printdevices() {

    getdeviceinfo().then((answer) => {answer.forEach(element => {
    row_container.innerHTML += `<div class="col-xs-12 col-md-3 ">
    ${element.price} ${element.isAvailable} ${element.createdAt}
    ${element.color} ${element.brand} ${element.ram}
    <img class="img-thumbnail" src="${element.picture}"/></div>`
        });
    })
}

printdevices()


async function deletdevice(){
    try{
        return await fetch()
    }
    catch{}
    finally{}

}
