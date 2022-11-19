const URL_API_BASE = "http://52.175.225.67:63203";
const URL_API_BASE_USUARIOS = "https://apiamingenieria.app/api/Persona";
const URL_API_BASE_REGISTRO = "https://apiamingenieria.app/api/persona";
const URL_API_BASE_VERIFICAR = "https://apiamingenieria.app/api/Persona";
const URL_API_BASE_CREAR_TRON = "https://excelsiortrader.app/api/CuentaTron";
const URL_API_BASE_LISTAR_TRON = "https://excelsiortrader.app/api/CuentaTron";
const URL_API_BASE_LISTAR_PLANES = "https://excelsiortrader.app/api/TiposMembresia";
const URL_API_BASE_LISTAR_PLAN_ACTIVADO = "https://excelsiortrader.app/api/Inversiones";
const URL_API_BASE_GUARDAR_PLAN_ACTIVO = "https://excelsiortrader.app/api/TiposMembresia";
const URL_API_BASE_DATOS_PERFIL = "https://apiamingenieria.app/api/Persona";
const URL_API_BASE_NUEVA_CONTRASENIA = "https://apiamingenieria.app/api/Usuario/CambiarContraseniaUsuario";
const URL_API_BASE_RECOVERY_CONTRASENIA = "https://apiamingenieria.app/api/Usuario";

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
const URL_API_RECOVERY_CONTRASENIA = URL_API_BASE_RECOVERY_CONTRASENIA + "/GenerarNuevaContraseniaUsuarioOlvidado"