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



function printdevices() {

    getdeviceinfo().then((answer) => {answer.forEach(element => {
    row_container.innerHTML += `<div class="md-lg-col xs-sm-col-12" id="${element.id}">
    <img class="img-thumbnail" src="${element.picture}"/>
    ${element.price} ${element.isAvailable} ${element.createdAt}
    ${element.color} ${element.brand} ${element.ram}
    
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
