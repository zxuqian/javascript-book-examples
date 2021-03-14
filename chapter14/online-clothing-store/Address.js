class Address {
  constructor({
    name = "",
    province = "",
    city = "",
    address = "",
    mobilePhone = "",
  } = {}) {
    this.name = name;
    this.province = province;
    this.city = city;
    this.address = address;
    this.mobilePhone = mobilePhone;
  }

  get fullAddress() {
    return `${this.province}${this.city}${this.address}`;
  }
}

export default Address;
