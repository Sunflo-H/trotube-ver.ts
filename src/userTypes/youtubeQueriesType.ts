export type YoutubeData = {
  etag: string;
  items: YoutubeVideo[];
  kind: string;
  nextPageToken: string;
  pageInfo: { totalResults: number; resultsPerPage: number };
  regionCode: string;
};

/**
 * "유튜브 비디오 데이터"를 불러왔을 때 items[] 에 있는 데이터들의 타입
 */
export type YoutubeVideo = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: Snippet;
};

export type Snippet = {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: Thumbnails;
    medium: Thumbnails;
    high: Thumbnails;
    standard: Thumbnails;
    maxres: Thumbnails;
  };
  title: string;
};

export type Thumbnails = {
  height: number;
  url: string;
  width: number;
};

export type Channel = {};
