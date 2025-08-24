declare global {
  var mongoose: {
    conn: any;
    promise: Promise<any> | null;
  } | undefined;

  interface LinkType {
    url: string;
    type: string; // "image" or "embed"
  }

  interface ExperienceType {
    _id?: string;
    title: string;
    cover: LinkType;
    evidence: LinkType;
    strands: string[];
    dates: string[];
    members: string[];
    los: string[];
    timeline: string[];
    description: string;
    tips: string[];
  }
}

export {};