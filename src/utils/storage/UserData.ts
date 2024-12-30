class UserData {
  private profileData = [
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
    [
      4,
      {
        answer: ["South Boston, Virginia, United States"],
        fieldName: "Location (City) *",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      5,
      {
        answer: ["Yes"],
        fieldName: "Are you legally authorized to work in the United States? *",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      6,
      {
        answer: ["No"],
        fieldName:
          "Will you now or in the future require sponsorship for employment visa status?",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      7,
      {
        answer: ["Male"],
        fieldName: "Gender",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      8,
      {
        answer: ["No"],
        fieldName: "Are you Hispanic/Latino?",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      9,
      {
        answer: ["I am not a protected veteran"],
        fieldName: "Veteran Status",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
    [
      10,
      {
        answer: ["Asian"],
        fieldName: "Please identify your race",
        fieldType: "SimpleDropdown",
        section: "",
      },
    ],
  ];

  public getUserProfileData = (): any => {
    return this.profileData;
  };
}

export { UserData };
