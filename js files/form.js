const API= "https://my-json-server.typicode.com/Jeck99/fake-server/devices" ;
let usersdevice= {
    id: idInput.value,
    price:priceInput.value,
    isAvailable: isInput.value,
    createdAt:createdAtInput.value,
    color:colorInput.value,
    brand:brandInput.value,
    ram:ramInput.value,
    picture:pictureInput.value
}


async function postdevice() {
    try {
        return await fetch(API,{
            method: `POST`,
            body: JSON.stringify(usersdevice),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res=>alert("Sent Successfully"))
        
    }
    catch (err) {
        console.log(err)
    }
    finally {}
}
