import RequestManager from "./RequestManager";

const GetAllCasingTemplates = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/template/casing`
    });
}

const GetCasingTemplate = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/template/casing/${id}`
    });
}

const CreateCasingTemplate = async ({ casing }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/template/casing`,
        body: casing
    });
}

const UpdateCasingTemplate = async ({ casing }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/template/casing`,
        body: casing
    });
}

const DeleteCasingTemplate = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/template/casing/${id}`
    });
}

const CasingTemplateService = {
    GetAllCasingTemplates,
    GetCasingTemplate,
    CreateCasingTemplate,
    UpdateCasingTemplate,
    DeleteCasingTemplate
}

export default CasingTemplateService;