import client from "../../shared/http-client/Client"


const LoginService = () => {
    async function login(data){
        const response = await client.post("/auth/login", {params: data})
        return response
    }

    return{
        login
    }
}

export default LoginService;