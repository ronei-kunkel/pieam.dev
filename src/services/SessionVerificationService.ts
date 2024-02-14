import { PieamApi } from "@/apis/PieamApi";
import { CookieService } from "./CookieService";

export class SessionVerificationService {

  private cookieService: CookieService = new CookieService();

  public validateSession() {

    const cookie = this.cookieService.getCookie('p_session_verification');

    if (cookie !== '1') {
      return false;
    }

    return true;
  }
}
