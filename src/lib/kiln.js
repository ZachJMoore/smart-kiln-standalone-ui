

class Kiln{

    constructor(url = "http://localhost:2222/api"){

        this.url = url
        this.getPackage = ()=>{
            return fetch(`${this.url}/kiln/get-package`)
        }
        this.getSchedules = ()=>{
            return fetch(`${this.url}/get-schedules`)
        }
    }

}

export default Kiln