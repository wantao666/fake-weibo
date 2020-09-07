const {
    getUserInfo,
    createUser
} = require('../service/user')

const {
    SuccessResult,
    ErrorResult
} = require('../model/Result')

const {
    USER_NO_EXIST,
    USER_ALREADY_EXIST,
    REGISTER_ERROR,
    LOGIN_ERROR
} = require('../model/ErrorInfo')

const {
    doCrypto
} = require('../util/crypto')
/**
 * 
 * @param {用户名} userName 
 * @description:用户名是否存在
 */
async function isExist(userName) {
    const userInfo = await getUserInfo(userName)

    if (userInfo) {
        return new SuccessResult(userInfo)
    } else {
        return new ErrorResult(USER_NO_EXIST)
    }
}
/**
 * 
 * @param {String} userName
 * @param {String} password
 * @param {String} gender(1.男性2.女性3.保密)
 */
async function register({
    userName,
    password,
    gender
}) {
    const userInfo = await getUserInfo(userName)
    if (userInfo) {
        return new ErrorResult(USER_ALREADY_EXIST)
    }
    try {
        await createUser({
            userName,
            password: doCrypto(password),
            gender
        })
        return new SuccessResult()
    } catch (error) {
        console.log(error.message, error.stack)
        return new ErrorResult(REGISTER_ERROR)
    }
}

async function login(ctx, userName, password) {
    const userInfo = await getUserInfo(userName, doCrypto(password))
    console.log('ctx', ctx)
    console.log('userInfo', userInfo)
    console.log('session', ctx.session)
    if (!userInfo) {
        return new ErrorResult(LOGIN_ERROR)
    }
    if (ctx.session.userInfo == null) {
        ctx.session.userInfo = userInfo
    }
    return new SuccessResult()
}

module.exports = {
    isExist,
    register,
    login
}