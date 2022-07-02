async function getdeviceinfo(){
    try{
        return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
        .then(res=> res.json())
    }
    catch(err){
        console.log(err)
    }
    finally{}
}

function printdevices(){
    getdeviceinfo().then(answer=>info1.innerHTML= answer)
}