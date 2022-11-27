import RequestManager from "./RequestManager";

const GetAllBullets = async () => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/bullet`
    });
}

const GetBullet = async ({ id }) => {
    return RequestManager.Get({
        url: `${process.env.REACT_APP_SERVER_URL}/api/bullet/${id}`
    });
}

const CreateBullet = async (bullet) => {
    return RequestManager.Post({
        url: `${process.env.REACT_APP_SERVER_URL}/api/bullet`,
        body: bullet
    });
}

const UpdateBullet = async (bullet) => {
    return RequestManager.Put({
        url: `${process.env.REACT_APP_SERVER_URL}/api/bullet`,
        body: bullet
    });
}

const DeleteBullet = async ({ id }) => {
    return RequestManager.Delete({
        url: `${process.env.REACT_APP_SERVER_URL}/api/bullet/${id}`
    });
}

const BulletService = {
    GetAllBullets,
    GetBullet,
    CreateBullet,
    UpdateBullet,
    DeleteBullet
}

export default BulletService;