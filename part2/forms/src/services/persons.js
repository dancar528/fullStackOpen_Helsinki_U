import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data);
};

const create = newPerson => {
    const request = axios.post(baseUrl, newPerson);
    return request
        .then(response => response.data)
        .catch(error => error.response.data);
};

const remove = personId => {
    const request = axios.delete(`${baseUrl}/${personId}`);
    return request.then(response =>
        console.log('remove response', response)
    );
};

const update = person => {
    const request = axios.put(`${baseUrl}/${person.id}`, person);
    return request
        .then(response => response.data)
        .catch(error => error.response.data);
};

export default { getAll, create, remove, update };
