const URL_API_BASE = "http://52.175.225.67:63203";
const URL_API_BASE_USUARIOS = "https://excelsiortrader.app/api/Persona";
const URL_API_BASE_REGISTRO = "http://52.175.225.67:8082/api/persona";
const URL_API_BASE_VERIFICAR = "http://52.175.225.67:8082/api/Persona";
const URL_API_BASE_CREAR_TRON = "http://52.175.225.67:63203/api/CuentaTron";
const URL_API_BASE_LISTAR_TRON = "http://52.175.225.67:63203/api/CuentaTron";
const URL_API_BASE_LISTAR_PLANES = "http://52.175.225.67:63203/api/TiposMembresia";
const URL_API_BASE_LISTAR_PLAN_ACTIVADO = "http://52.175.225.67:63203/api/Inversiones";
const URL_API_BASE_GUARDAR_PLAN_ACTIVO = "http://52.175.225.67:63203/api/TiposMembresia";
const URL_API_BASE_DATOS_PERFIL = "http://52.175.225.67:8082/api/Persona";
const URL_API_BASE_NUEVA_CONTRASENIA = "https://excelsiortrader.app/api/Usuario/CambiarContraseniaUsuario";

const URL_API_LOGIN_USUARIOS = URL_API_BASE_USUARIOS + "/IniciarSesion";
const URL_API_REGIS_USUARIOS = URL_API_BASE_REGISTRO + "/CrearPersona";
const URL_API_BASE_VERIFICARCODE = URL_API_BASE_VERIFICAR + "/VerificarCodigo";
const URL_API_CREAR_CUENTA_TRON = URL_API_BASE_CREAR_TRON + "/CrearCuentaTron";
const URL_API_LISTAR_CUENTA_TRON = URL_API_BASE_LISTAR_TRON + "/ListarCuentasTron";
const URL_API_LISTAR_PLANES_INVER = URL_API_BASE_LISTAR_PLANES + "/ListarTiposMembresia";
const URL_API_LISTAR_PLAN_ACTIVADO = URL_API_BASE_LISTAR_PLAN_ACTIVADO + "/ListarMisInversiones";
const URL_API_GUARDAR_PLAN_ACTIVO = URL_API_BASE_GUARDAR_PLAN_ACTIVO + "/GuardarInversion";

const URL_API_DATOS_PERFIL = URL_API_BASE_DATOS_PERFIL + "/BuscarPersonaPorIdPersona";
const URL_API_NUEVA_CONTRASENIA = URL_API_BASE_NUEVA_CONTRASENIA + "/CambiarContraseniaUsuario"; 