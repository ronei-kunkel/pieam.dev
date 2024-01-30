import axios from 'axios';

const req = axios.create({
  baseURL: 'https://api.pieam.dev',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

interface PieamApiService {
  getLoginRoute(): string;
  getGsiClientRoute(): string;
  logout(): void;
}

export class pieamApiService implements PieamApiService {
  public getLoginRoute(): string {
    return req.defaults.baseURL + '/v1/auth/google';
  }

  public getGsiClientRoute(): string {
    return req.defaults.baseURL + '/v1/gsi/client';
  }

  public logout() {
    return req.post('/v1/auth/revoke');
  }
};
