# @vertex-corp/aws-credentials

This library provides a AWS credential provider function, `vertexProvider`, which is similar to the `fromIni` provider from the `@aws-sdk/credential-providers` package.

## Installation

To install the package, run:

```sh
npm install @vertex-corp/aws-credentials
```

## Usage

Early in your application, you should call the `setupAWSEnvironment` function to set up the environment variables that the AWS SDK will use to find the AWS configuration file. Before any AWS SDK client is created, you should call this function.

```js
import { setupAWSEnvironment } from '@vertex-corp/aws-credentials/env';

setupAWSEnvironment();
```

---

You can also use the `vertexProvider` function to get the credentials object directly for each client.

The `vertexProvider` function can be used in the same way as the `fromIni` provider. It accepts the same parameters and returns the same type of credentials.

> [!NOTE]  
> By default, it will look for AWS configuration file `aws.config` in the project's root directory.

## Example

```ts
import { vertexProvider } from '@vertex-corp/aws-credentials';

const credentials = vertexProvider();

console.log(credentials);
```

## S3 Example

```ts
import { S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
import { vertexProvider } from '@vertex-corp/aws-credentials';

const client = new S3Client({
  credentials: vertexProvider(),
  region: 'us-west-2',
});

const command = new ListBucketsCommand({});

client.send(command).then((response) => {
  console.log(response.Buckets);
});
```
