const userDAO = new (require('../DAO/UserDAO'));
const adDAO = new (require('../DAO/AdDAO'))();


class UserService {
getAdminUserList = async (searchCondition, searchKeyword) => {
    const response = await userDAO.getAdminUserList(searchCondition, searchKeyword);

    return response;
  }
}

module.exports = UserService;