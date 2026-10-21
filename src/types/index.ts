export interface ProfileSocials {
  github: string;
  linkedin: string;
  instagram: string;
}

export interface ProfileData {
  name: string;
  role: string;
  secondaryRoles: string[];
  elevatorPitch: string;
  email: string;
  socials: ProfileSocials;
}

export type Theme = 'dark' | 'light';
