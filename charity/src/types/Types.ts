interface CharityCard {
  nonprofitTags: NonprofitTag | undefined;
}

interface NonprofitTag {
  id: string;
  tagName: string;
}

interface CharityResponse<T> extends Response {
  data: T | undefined;
  parsedBody?: T;
}

export type { CharityCard, CharityResponse, NonprofitTag };
