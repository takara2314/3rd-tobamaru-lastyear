interface MyMessage {
  name: string;
  nameEn: string;
  classLabel: string;
  role: string;
  message: string;
}

export interface GroupMessage {
  poster: MyMessage[];
  homepage: MyMessage[];
  photo: MyMessage[];
  video: MyMessage[];
}

export default MyMessage;
