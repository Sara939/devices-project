const API= "https://my-json-server.typicode.com/Jeck99/fake-server/devices" ;


async function getdeviceinfo() {
    try {
        return await fetch(API)
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
    row_container.innerHTML += `<div class="col-3" id="${element.id}">
    ${element.price} ${element.isAvailable} ${element.createdAt}
    ${element.color} ${element.brand} ${element.ram}
    <img class="img-thumbnail" src="${element.picture}"/>
    <button onclick="deletdevice('${element.id}')">&#9940;</button>
    </div>
    `
        });
    })
}

printdevices()




async function deletdevice(id){
    try{
        let result = await fetch(`${API}/${id}`, {method: "DELETE"})
        if(result.status <= 200) document.getElementById(id).remove()
    }
    catch(err){console.log(err)}
    finally{}

}
