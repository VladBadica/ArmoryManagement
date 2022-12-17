const Get = async ({ url }) => {
    return fetchData({ url, method: "GET" });
}

const Post = async ({ url, body }) => {
    return fetchData({ url, method: "POST", body });
}

const Put = async ({ url, body }) => {
    return fetchData({ url, method: "PUT", body });
}

const Delete = async ({ url, body }) => {
    return fetchData({ url, method: "DELETE", body });
}

const fetchData = async ({ url, method, body }) => {
    return await fetch(
        url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkRvblZsYWRzdGVyIiwibmFtZWlkIjoiMiIsIm5iZiI6MTY2OTg0MzAzMCwiZXhwIjoxNzAxMzc5MDMwLCJpYXQiOjE2Njk4NDMwMzB9.W7eJqt92S8_RZ0EdAvdYjVBmS5LRBoeN2UzurJrJvCY'
        },
        method,
        body: JSON.stringify(body)
    })
        .catch(error => {
            console.error('There was an error!', error);
            return {
                error: {
                    errorMessage: error.toString(),
                    status: ""
                }
            }
        })
        .then(async response => {
            if (!response) {
                return {
                    status: 500,
                    error: { errorMessage: "Could not establish connection to the requested service." }
                }

            }

            if (response.status === 401) {
                return {
                    error: {
                        errorMessage: "Unauthorized access.",
                    },
                    status: response.status
                };
            }

            if (response.status === 404) {
                return {
                    error: {
                        errorMessage: "Data was not found.",
                    },
                    status: response.status
                };
            }

            if (response.status === 405) {
                return {
                    error: {
                        errorMessage: "Http method not allowed.",
                    },
                    status: response.status
                }
            }

            if (![200, 201, 204].includes(response.status)) {
                return {
                    error: {
                        errorMessage: await response.json()
                    },
                    status: response.status
                };

            }
            else if (response.status !== 204) {
                return {
                    data: await response.json(),
                    status: response.status

                }
            }

            return { status: response.status }
        });
}

const GetRequest = async ({ url }) => {
    return await fetchData({ method: 'GET', url });
}

const RequestManager = {
    Get,
    Post,
    Put,
    Delete
}

export default RequestManager;