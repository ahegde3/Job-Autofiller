class UserData {
  private data: { [key: string]: string } = {
    "First Name *": "John",
    "Last Name *": "Doe",
    "Email *": "xyz@gmail.com",
    'Phone *': '1234567890',
  };

  public getFieldValue(fieldName: string): string {
    return this.data[fieldName] || "XYZ";
  }
}

export { UserData };
