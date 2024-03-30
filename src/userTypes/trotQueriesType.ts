export type Member = {
  name: string;
  songs: unknown[];
  rank: string;
};

export type Members = Member[];

export type ak47 = string;

export type Video = {
  contentDetails: {
    caption: string;
    contentRating: {};
    definition: string;
    dimension: string;
    duration: string;
    licensedContent: boolean;
    projection: string;
  };
  etag: string;
  id: string;
  kind: string;
  snippet: {
    categoryId: string;
    channelId: string;
    channelTitle: string;
    defaultAudioLanguage: string;
    description: string;
    liveBroadcastContent: string;
    localized: { description: string; title: string };
    publishedAt: string;
    tags: string[];
    thumbnails: {
      default: Thumbnails;
      medium: Thumbnails;
      high: Thumbnails;
      standard: Thumbnails;
      maxres: Thumbnails;
    };
    title: string;
  };
  statistics: {};
};

export type Thumbnails = {
  height: number;
  url: string;
  width: number;
};

export type RoundData = {
  etag: string;
  items: {}[];
  kind: string;
  pageInfo: { totalResults: 1; resultsPerPage: 1 };
};
