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
    const authToken = localStorage.getItem("authToken");
    const headers = {
        'Content-Type': 'application/json'
    }
    if (authToken) {
        headers.Authorization = `Bearer ${authToken}`;
    }

    return await fetch(
        url, {
        headers,
        method,
        body: JSON.stringify(body)
    }).catch(error => {
        console.error('There was an error!', error);
        return {
            error: {
                errorMessage: error.toString(),
                status: ""
            }
        }
    }).then(async (response) => {
        const returnObject = {
            status: response.status,
            url: response.url
        }

        if (response.status !== 204 && response.status !== 201) {
            const data = await response.json();
            returnObject.data = data;
        }

        if ([200, 201, 204].indexOf(response.status) < 0) {
            returnObject.error = true;

            if (response.status === 401) {
                // Handle refresh token
            }
        }

        return returnObject;
    });
}

const RequestManager = {
    Get,
    Post,
    Put,
    Delete
}

export default RequestManager;