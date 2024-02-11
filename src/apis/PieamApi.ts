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

  public login(credential: string) {
    return req.post('/v1/auth/google', { "credential": credential });
  }

  public async session() {
    return await req.get('/v1/session', { data: { 'p_csrf_token': new CookieService().getCookie('p_csrf_token') } });
  }

  public logout() {
    return req.delete('/v1/auth', { data: { 'p_csrf_token': new CookieService().getCookie('p_csrf_token') } });
  }
};
