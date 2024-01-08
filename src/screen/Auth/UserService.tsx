export interface IUserProfileParams {
  mobileNumber?: string;
  lastName?: string;
  firstName?: string;
  name?: string;
  uid?: string;
  email?: string;
}

export const INIT_DATA: IUserProfileParams = {
  name: undefined,
  lastName: undefined,
  firstName: undefined,
  uid: undefined,
  mobileNumber: undefined,
  email: undefined,
};
