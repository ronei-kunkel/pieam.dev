import { CookieService } from '@/services/CookieService';
import axios from 'axios';

const req = axios.create({
  baseURL: 'https://api.pieam.dev',
  withCredentials: true,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

export class PieamApi {

  private cookeService: CookieService = new CookieService();

  public login(credential: string) {
    return req.post('/v1/auth/google', { "credential": credential });
  }

  public logout() {
    return req.delete('/v1/auth', { data: { 'p_csrf_token': this.cookeService.getCookie('p_csrf_token') } });
  }

  public getUserInfo() {
    return req.get('/v1/user/info');
  }
};
