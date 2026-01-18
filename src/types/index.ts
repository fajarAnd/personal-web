// Common types and interfaces for Personal Web

export interface Profile {
  name: string;
  title: string;
  bio: string;
  professions: string[];
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface PersonalInfo {
  birthday: string;
  age: number;
  address: string;
  email: string;
  phone: string;
  nationality: string;
  study: string;
  degree: string;
  interest: string;
  freelance: string;
}
