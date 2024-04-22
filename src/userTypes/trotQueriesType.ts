export type Member = {
  name: string;
  songs: Song[];
  rank: string;
};

export type Song = {
  etag: string;
  items: Video[];
  kind: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
};

export type Members = Member[];

// 로컬 비디오 데이터를 불러왔을 때 items에 있는 데이터들
export type Video = {
  contentDetails: ContentDetails;
  etag: string;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: {
    commentCount: string;
    favoriteCount: string;
    likeCount: string;
    viewCount: string;
  };
};

export type RoundData = {
  etag: string;
  items: Video[];
  kind: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
};

export type Snippet = {
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

export type ContentDetails = {
  caption: string;
  contentRating: {};
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
};

export type Thumbnails = {
  height: number;
  url: string;
  width: number;
};
