import {
  fromIni,
  fromNodeProviderChain,
  createCredentialChain,
} from '@aws-sdk/credential-providers';
import { CredentialsProviderError } from '@smithy/property-provider';

export function vertexProvider(init?: Parameters<typeof fromIni>[0]) {
  return createCredentialChain(
    fromIni({
      ...init,
      logger: init?.logger,
      configFilepath: init?.configFilepath ?? process.cwd() + '/aws.config',
      profile: init?.profile ?? process.platform,
    }),
    async () => {
      init?.logger?.debug('aws.config file not found');

      throw new CredentialsProviderError(
        'aws.config missing, using default credentials',
        {
          tryNextLink: true,
          logger: init?.logger,
        }
      );
    },
    fromNodeProviderChain(init)
  );
}

export { setupAWSEnvironment as config } from './env.js';
