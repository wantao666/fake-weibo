module.exports = {
    USER_NO_EXIST: {
        errCode: -1,
        msg: '用户不存在'
    },
    USER_ALREADY_EXIST: {
        errCode: -2,
        msg: '用户名已存在'
    },
    REGISTER_ERROR: {
        errCode: -3,
        msg: '注册失败'
    },
    VALIDATE_ERROR: {
        errCode: -4,
        msg: '校验失败'
    },
    LOGIN_ERROR: {
        errCode: -5,
        msg: "登录失败"
    },
    UNLOGIN_ERROR: {
        errCode: -6,
        msg: '尚未登录'
    },
    UPLOAD_FILE_TOO_LARGE: {
        errCode: -7,
        msg: '上传文件体积过大'
    },
    UPDATE_USER_ERROR: {
        errCode: -8,
        msg: '修改用户信息失败'
    },
    UPDATE_PASSWORD_ERROR: {
        errCode: -9,
        msg: '修改密码失败'
    },
    CREATE_BLOG_ERROR: {
        errCode: -10,
        msg: '创建微博失败'
    },
    FOLLOW_ERROR: {
        errCode: -11,
        msg: '关注失败'
    },
    UN_FOLLOW_ERROR: {
        errCode: -12,
        msg: '取消关注失败'
    }
}