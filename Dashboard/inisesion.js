const apiBase = axios.create({
    baseURL: "http://52.175.225.67:8082/api/Persona",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: "application/json, text/plain, */*"
    },
  });


async function siuuuu(){
await apiBase.post("/IniciarSesion", datos, {
})
}