interface CharityCard {
  data: Object | undefined;
  parsedBody?: Object;
}

interface CharityResponse<T> extends Response {
  data: T | undefined;
  parsedBody?: T;
}

export type { CharityCard, CharityResponse };
