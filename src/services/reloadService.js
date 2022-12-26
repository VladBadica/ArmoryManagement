import RequestManager from "./RequestManager";

const GetAllReloads = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/reload`
    });
}

const GetReload = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/reload/${id}`
    });
}

const CreateReload = async ({ reload }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/reload`,
        body: reload
    });
}

const CasingService = {
    GetAllReloads,
    GetReload,
    CreateReload
}

export default CasingService;