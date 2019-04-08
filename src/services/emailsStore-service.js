export default class EmailsStoreService {
  data = [
    {
      id: 1,
      email: "admin@admin.com",
    },
  ];

  getEmails() {
    return new Promise((resolve) => {
      resolve(this.data);
    });
  }
}
