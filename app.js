

async function obtener() {
await fetch('https://api.unsplash.com/photos/?client_id=pmDs_vJUQiDVoT9xBds_ffy5W7J6I__HKSHFaQyD7sk')
.then(datos =>datos.json())
.then(console.log(datoglobal))
}
obtener()

