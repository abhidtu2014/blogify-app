import {Timestamp} from 'firebase/firestore';
export interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  isAnonymous: boolean;
}

export interface Blog {
  id: string;
  title: string;
  author: string;
  text: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  likeCount?: number;
  viewCount?: number;
}