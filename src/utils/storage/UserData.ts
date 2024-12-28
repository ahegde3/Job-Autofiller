class UserData {
  public data: { [key: string]: string } = {
    "First Name *": "John",
    "Last Name *": "Doe",
    "Email *": "xyz@gmail.com",
    "Phone *": "1234567890",
    //     Preferred Name:

    // "How did you hear about us? *\n\n\n":,
    // "Resume/CV *" :,   //"SingleFileUpload"
    // "Cover Letter":,   //"SingleFileUpload".
    // Location (City) *:,  //SimpleDropdown
    // Are you legally authorized to work in the United States?  :  //"SimpleDropdown"
    // "Will you now or in the future require sponsorship for employment visa status? *":,  //SimpleDropdown
  };

  public profileData = [
    [
      0,
      {
        answer: "John",
        fieldName: "First Name *",
        fieldType: "TextInput",
        section: "",
      },
    ],
    [
      1,
      {
        answer: "Doe",
        fieldName: "Last Name *",
        fieldType: "TextInput",
        section: "",
      },
    ],
    [
      2,
      {
        answer: "xyz@gmail.com",
        fieldName: "Email *",
        fieldType: "TextInput",
        section: "",
      },
    ],
    [
      3,
      {
        answer: "1234567890",
        fieldName: "Phone *",
        fieldType: "TextInput",
        section: "",
      },
    ],
  ];

  public getUserProfileData = (): any => {
    return this.profileData;
    // return Object.entries(this.data).map(([key, value], idx) => {
    //   return [idx, { answer: value, fieldName: key }];
    // });
  };
  public getFieldValue(fieldName: string): string {
    //find match if fieldName is not the key
    return this.data[fieldName] || "XYZ";
  }
}

export { UserData };
