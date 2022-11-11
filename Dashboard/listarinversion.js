const apiBase = axios.create({
    baseURL: "http://52.175.225.67:8085/api/Inversiones",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: "application/json, text/plain, */*"
    },
  });


async function stavenGay(){
await apiBase.post("/ListarMisInversiones", datos, {
})
}