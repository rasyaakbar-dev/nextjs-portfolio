export interface Project {
  id: number;
  title: string;
  description: string;
  link: string; // Link GitHub atau deployment
}

export interface Skill {
  name: string;
  // Gunakan string untuk nama ikon, kita akan cari ikonnya di komponen
  iconName: string;
}