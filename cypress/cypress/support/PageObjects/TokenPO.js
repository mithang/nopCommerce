import AxiosBase from "./../../../AxioClient";

class TokenPO {


  initData() {
    cy.fixture("user").then((data) => {
      globalThis.data = data;
    });
  }

  async getToken() {
    const result = await AxiosBase.getInstance().post("/token", {
      "guest": data.guest,
      "username": data.username,
      "password":data.password,
      "remember_me": data.remember_me
    });
    return result.data.access_token;

  }

  removeToken() {
    cy.removeToken();
  }

}
export default TokenPO;
