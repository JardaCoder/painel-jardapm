export interface BaseEntity {
  id: number;
  situation: "ACTIVE" | "INACTIVE";
  inclusionDate: string;
  lastModification: Date;
}
