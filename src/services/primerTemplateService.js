import RequestManager from "./RequestManager";

const GetAllPrimerTemplates = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`
    });
}

const GetPrimerTemplate = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer/${id}`
    });
}

const CreatePrimerTemplate = async ({ primer }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`,
        body: primer
    });
}

const UpdatePrimerTemplate = async ({ primer }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer`,
        body: primer
    });
}

const DeletePrimerTemplate = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/primer/${id}`
    });
}

const PrimerTemplateService = {
    GetAllPrimerTemplates,
    GetPrimerTemplate,
    CreatePrimerTemplate,
    UpdatePrimerTemplate,
    DeletePrimerTemplate
}

export default PrimerTemplateService;