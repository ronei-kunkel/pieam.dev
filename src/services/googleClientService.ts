interface GoogleClientService {
  getClientId(): string;
}

export class googleClientService implements GoogleClientService {
  public getClientId(): string {
    return '457440635808-66kbe4vui6dgo9katnn1i77481b1agtn.apps.googleusercontent.com';
  }
};