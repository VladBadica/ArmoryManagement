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
    console.log(url)
    return await fetch(
        url, {
        headers: { 'Content-Type': 'application/json' },
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

const RequestManager = {
    Get,
    Post,
    Put,
    Delete
}

export default RequestManager;