/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";

const packageName = "@azure/batch";
const packageVersion = "11.0.0";

export class BatchServiceClientContext extends msRestAzure.AzureServiceClient {
  credentials: msRest.ServiceClientCredentials;
  apiVersion?: string;
  batchUrl: string;

  /**
   * Initializes a new instance of the BatchServiceClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param batchUrl The base URL for all Azure Batch service requests.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, batchUrl: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }
    if (batchUrl == undefined) {
      throw new Error('\'batchUrl\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if (!options.userAgent) {
      const defaultUserAgent = msRestAzure.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.apiVersion = '2023-05-01.17.0';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = "{batchUrl}";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;
    this.batchUrl = batchUrl;

    if (options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if (options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
