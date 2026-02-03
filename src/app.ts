import { envs } from "./config/envs";
import { Server } from "./presentation/server";



(()=>{
    main();
})();

function main(){
    const server = new Server({Port: envs.PORT, Public_path: envs.PUBLIC_PATH});
    server.start();
}