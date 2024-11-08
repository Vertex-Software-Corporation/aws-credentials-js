/**
 * Initializes the environment variables for AWS configuration.
 *
 * This function sets the `AWS_CONFIG_FILE` and `AWS_PROFILE` environment variables
 * if they are not already defined. The `AWS_CONFIG_FILE` is set to './aws.config' by default,
 * and the `AWS_PROFILE` is set to the current platform (e.g., 'win32', 'darwin', 'linux').
 *
 * @remarks
 * This function is useful for setting up AWS SDK configuration in a consistent manner
 * across different environments.
 */
export function setupAWSEnvironment(profile = process.platform) {
  process.env.AWS_CONFIG_FILE = process.env.AWS_CONFIG_FILE || './aws.config';
  process.env.AWS_PROFILE = process.env.AWS_PROFILE || profile;
}
