const candidateService = {
    load: function (id) {
        return fetch(`http://localhost:5000/candidates${id ? `/${id}` : ''}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

        }).then(res => res.json())
    },
    create: function (data) {
        return fetch(`http://localhost:5000/candidates/`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data),

        }).then(res => res.json());
    },
    update: function (id, data) {
        return fetch(`http://localhost:5000/candidates${id ? `/${id}` : ''}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),

        }).then(res => res.json())
    },
    delete: function (id) {
        return fetch(`http://localhost:5000/candidates${id ? `/${id}` : ''}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },

        }).then(res => res.json())
    }
};

export default candidateService;