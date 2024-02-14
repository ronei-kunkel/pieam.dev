export class CookieService {

  private cookies: Map<string, string>;

  constructor() {
    const cookies = new Map();

    document.cookie.split(';').forEach(cookie => {
      const [key, value] = cookie.trim().split('=');
      cookies.set(key, value);
    });

    this.cookies = cookies;
  }

  public getCookie(cookie: string): string | undefined {
    return this.cookies.get(cookie);
  }
}