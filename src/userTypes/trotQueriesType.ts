export type Member = {
  name: string;
  songs: unknown[];
  rank: string;
};

export type Members = Member[];

export type ak47 = string;

export type Video = {
  etag: string;
  items: {}[];
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};
