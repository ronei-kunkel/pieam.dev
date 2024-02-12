import { CookieService } from "./CookieService";
import { PieamApi } from "@/apis/PieamApi";

export class SessionVerificationService {

  pieamApi:PieamApi = new PieamApi();

  public async validSession() {
    const cookieService = new CookieService();

    const cookie = cookieService.getCookie('p_session_verification');

    if (cookie === '0' || cookie == undefined) {
      return false;
    }

    const sessionVerified = await this.pieamApi.session();

    if (cookie === '1' && sessionVerified.status === 200) {
      return true;
    }

    return false;
  }
}
