import AxiosBase from "./../../../AxioClient";
import TokenPO from "./TokenPO";

class CategoryPO {


  initData() {
    cy.fixture("category").then((data) => {
      globalThis.data = data;
    });
  }

  async getCategories() {
    const token = await new TokenPO().getToken();
    console.log(token);
    const result = await AxiosBase.getInstance(token).get("/api/categories");
    return result.data.categories;

  }


}
export default CategoryPO;
