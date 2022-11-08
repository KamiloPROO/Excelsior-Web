const apiBase = axios.create({
    baseURL: "http://52.175.225.67:8082/api/persona",
    withCredentials: true,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: "application/json, text/plain, */*"
    },
  });

  

async function hollllaa(){ 
    await apiBase.post("/CrearPersona", datos, {
    })
}
