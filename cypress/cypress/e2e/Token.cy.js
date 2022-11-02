
import TokenPO from "../support/PageObjects/TokenPO";
import AxiosBase from "./../../AxioClient";

describe("tokenPO GraphQL spec", () => {

  const tokenPO = new TokenPO();


  before(() => {
    
   
  });

  beforeEach(() => {
    // tokenPO.setToken();
    tokenPO.initData();
  });

  after(() => {
    
    // tokenPO.removeToken();
  });

  afterEach(()=>{
    
  });
  

  it("Test get token by account", async () => {
    console.log(tokenPO.getToken());
    expect(await tokenPO.getToken()).to.not.be.empty;

  });

});
