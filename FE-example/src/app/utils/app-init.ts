import { KeycloakService } from 'keycloak-angular';

export const initializer = (keycloak: KeycloakService) => {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'BPIFrance',
        clientId: 'BPIFrance',
      },
      loadUserProfileAtStartUp: false,
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
      bearerExcludedUrls: ['/'],
    });
};
