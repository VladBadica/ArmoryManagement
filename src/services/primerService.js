import RequestManager from "./RequestManager";

const GetAllPrimers = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`
    });
}

const GetPrimer = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer/${id}`
    });
}

const CreatePrimer = async ({ primer }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`,
        body: primer
    });
}

const UpdatePrimer = async ({ primer }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`,
        body: primer
    });
}

const DeletePrimer = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer/${id}`
    });
}

const PrimerService = {
    GetAllPrimers,
    GetPrimer,
    CreatePrimer,
    UpdatePrimer,
    DeletePrimer
}

export default PrimerService;