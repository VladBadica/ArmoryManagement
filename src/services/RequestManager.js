const Request = async () => {
    return await fetchData({ url: 'https://localhost:7146/api/bullet/-2' });
}

const fetchData = async ({ url }) => {
    return await fetch(url)
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
            let returnedResponse = {};
            if (!response) {
                return returnedResponse = {
                    status: 500,
                    error: { errorMessage: "Could not establish connection to the requested service." }
                }

            }

            returnedResponse = {
                status: response.status,
            }

            if (returnedResponse.status === 404) {
                return returnedResponse.error = {
                    errorMessage: "Data was not found.",
                    status: response.status
                };

            }

            if (![200, 201, 204].includes(returnedResponse.status)) {
                return returnedResponse.error = {
                    errorMessage: await response.json(),
                    status: response.status
                };

            }

            else if (returnedResponse.status !== 204) {
                return returnedResponse.data = await response.json();
            }
        });
}

const RequestManager = {
    Request,
}

export default RequestManager;