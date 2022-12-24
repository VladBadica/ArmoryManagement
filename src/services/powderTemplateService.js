import RequestManager from "./RequestManager";

const GetAllPowderTemplates = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`
    });
}

const GetPowderTemplate = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder/${id}`
    });
}

const CreatePowderTemplate = async ({ powder }) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`,
        body: powder
    });
}

const UpdatePowderTemplate = async ({ powder }) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder`,
        body: powder
    });
}

const DeletePowderTemplate = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/powder/${id}`
    });
}

const PowderTemplateService = {
    GetAllPowderTemplates,
    GetPowderTemplate,
    CreatePowderTemplate,
    UpdatePowderTemplate,
    DeletePowderTemplate
}

export default PowderTemplateService;