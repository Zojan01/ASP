class StudentService{
    axios
    baseUrl

    constructor(axios, apiUrl) {
        this.axios = axios
        this.baseUrl = `${apiUrl}student`
    }

    getAll() {
        let self = this;
        return self.axios.get(`${self.baseUrl}`);
    }
}

export default StudentService