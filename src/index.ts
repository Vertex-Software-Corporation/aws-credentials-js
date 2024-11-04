import { fromIni } from '@aws-sdk/credential-providers';

export function vertexProvider(init?: Parameters<typeof fromIni>[0]) {
  return fromIni({
    ...init,
    logger: init?.logger,
    configFilepath: init?.configFilepath ?? process.cwd() + '/aws.config',
    profile: init?.profile ?? process.platform,
  });
}
