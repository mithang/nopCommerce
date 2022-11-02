
import CategoryPO from "../support/PageObjects/CategoryPO";
import AxiosBase from "../../AxioClient";

describe("CategoryPO spec", () => {

  const categoryPO = new CategoryPO();


  before(() => {
    
   
  });

  beforeEach(() => {
    // categoryPO.setToken();
    categoryPO.initData();
  });

  after(() => {
    
    // categoryPO.removeToken();
  });

  afterEach(()=>{
    
  });
  

  it("Test list categories", async () => {
    
    expect(await categoryPO.getCategories()).to.not.be.empty;

  });

});
