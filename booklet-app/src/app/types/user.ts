export interface UserForAuth {
    username: string;
    email: string;
    profileImg: string;
    password: string;
    id: string;
  }

  export interface User {
    username: string,
    email: string,
    profileImg: string,
    _id: string,
  }


  export interface UserProfileResponse {
    userdata: {
      _id: string;
      username: string;
      email: string;
      profileImg: string;
    };
    uploads: number;
  }