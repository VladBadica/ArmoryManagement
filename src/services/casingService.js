import RequestManager from "./RequestManager";

const GetAllCasings = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/casing`
    });
}

const GetCasing = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/casing/${id}`
    });
}

const CreateCasing = async ({ casing }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/casing`,
        body: casing
    });
}

const UpdateCasing = async ({ casing }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/casing`,
        body: casing
    });
}

const DeleteCasing = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/casing/${id}`
    });
}

const CasingService = {
    GetAllCasings,
    GetCasing,
    CreateCasing,
    UpdateCasing,
    DeleteCasing
}

export default CasingService;