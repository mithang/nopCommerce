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



  // UpdateCalendar() {
  //   const query = gql`
  //     mutation UpdateCalendar($input: UpdateCalendarInput) {
  //       updateCalendar(input: $input)
  //     }
  //   `;
  //   return cy.wrap(
  //     client.query({
  //       query,
  //       variables: {
  //         input: {
  //           allDay: 0,
  //           creatorAppId: 39804,
  //           description: null,
  //           endTime: "2022-10-20 10:01:01",
  //           imageUrl: null,
  //           itemTypeId: 1,
  //           location: null,
  //           privacyTypeId: 1,
  //           publishTime: "2022-10-20 10:01:01",
  //           recurrenceTypeId: 1,
  //           slcketAppId: 39804,
  //           startTime: "2022-10-20 10:01:01",
  //           subtitle: null,
  //           title: "okkoko11222",
  //           active: true,
  //           calendarItemId: 15,
  //         },
  //       },
  //       fetchPolicy: "no-cache",
  //     })
  //   );
  // }

}
export default TokenPO;
