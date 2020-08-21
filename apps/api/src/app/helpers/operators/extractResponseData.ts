import { map } from 'rxjs/operators';

export const extractResponseData = () => map(({ data }) => data);
