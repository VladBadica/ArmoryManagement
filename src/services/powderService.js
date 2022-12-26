import RequestManager from "./RequestManager";

const GetAllPowders = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`
    });
}

const GetPowder = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder/${id}`
    });
}

const CreatePowder = async ({ powder }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`,
        body: powder
    });
}

const UpdatePowder = async ({ powder }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`,
        body: powder
    });
}

const DeletePowder = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder/${id}`
    });
}

const PowderService = {
    GetAllPowders,
    GetPowder,
    CreatePowder,
    UpdatePowder,
    DeletePowder
}

export default PowderService;