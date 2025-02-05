/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { StorageMoverClient } from "../src/storageMoverClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("storageMover test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: StorageMoverClient;
  let location: string;
  let resourceGroup: string;
  let storageMoverName: string;
  let agentName: string;
  let endpointName: string;
  let endpointName1: string;
  let projectName: string;
  let jobDefinitionName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new StorageMoverClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    storageMoverName = "storageMoverName";
    agentName = "testagent";
    endpointName = "testendpoint";
    endpointName1 = "testendpoint1";
    projectName = "testendproject";
    jobDefinitionName = "testjobDefinition";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("storageMovers create test", async function () {
    const res = await client.storageMovers.createOrUpdate(
      resourceGroup,
      storageMoverName,
      {
        description: "Example Storage Mover Description",
        location,
        tags: { key1: "value1", key2: "value2" }
      });
    assert.equal(res.name, storageMoverName);
  });

  it("agents create test", async function () {
    const arcResourceid = "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/Microsoft.HybridCompute/machines/testhybridCompute"
    const res = await client.agents.createOrUpdate(
      resourceGroup,
      storageMoverName,
      agentName,
      {
        description: "Example Agent Description",
        arcResourceId: arcResourceid,
        arcVmUuid: "3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9"
      });
    assert.equal(res.name, agentName);
  });

  it("endpoints create test", async function () {
    const said = "/subscriptions/" + subscriptionId + "/resourceGroups/" + resourceGroup + "/providers/Microsoft.Storage/storageAccounts/teststorageaccountxxx1"
    const res = await client.endpoints.createOrUpdate(
      resourceGroup,
      storageMoverName,
      endpointName,
      {
        properties: {
          description: "Example Storage Container Endpoint Description",
          blobContainerName: "testblob",
          endpointType: "AzureStorageBlobContainer",
          storageAccountResourceId: said
        }
      });
    assert.equal(res.name, endpointName);

    const result = await client.endpoints.createOrUpdate(
      resourceGroup,
      storageMoverName,
      endpointName1,
      {
        properties: {
          endpointType: "NfsMount",
          host: endpointName1,
          export: ""
        }
      });
    assert.equal(result.name, endpointName1);
  });

  it("projects create test", async function () {
    const res = await client.projects.createOrUpdate(
      resourceGroup,
      storageMoverName,
      projectName,
      {
        description: "Example Project Description"
      });
    assert.equal(res.name, projectName);
  });

  it("jobDefinitions create test", async function () {
    const res = await client.jobDefinitions.createOrUpdate(
      resourceGroup,
      storageMoverName,
      projectName,
      jobDefinitionName,
      {
        description: "Example Job Definition Description",
        agentName: agentName,
        copyMode: "Additive",
        sourceName: endpointName1,
        sourceSubpath: "/",
        targetName: endpointName,
        targetSubpath: "/"
      });
    assert.equal(res.name, jobDefinitionName);
  });

  it("storageMovers get test", async function () {
    const res = await client.storageMovers.get(resourceGroup, storageMoverName);
    assert.equal(res.name, storageMoverName);
  });

  it("agent get test", async function () {
    const res = await client.agents.get(resourceGroup, storageMoverName, agentName);
    assert.equal(res.name, agentName);
  });

  it("endpoints get test", async function () {
    const res = await client.endpoints.get(resourceGroup, storageMoverName, endpointName);
    assert.equal(res.name, endpointName);
  });

  it("projects get test", async function () {
    const res = await client.projects.get(resourceGroup, storageMoverName, projectName);
    assert.equal(res.name, projectName);
  });

  it("jobDefinitions get test", async function () {
    const res = await client.jobDefinitions.get(resourceGroup, storageMoverName, projectName, jobDefinitionName);
    assert.equal(res.name, jobDefinitionName);
  });

  it("endpoints list test", async function () {
    const resArray = new Array();
    for await (let item of client.endpoints.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 2);
  });

  it("agent list test", async function () {
    const resArray = new Array();
    for await (let item of client.agents.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("projects list test", async function () {
    const resArray = new Array();
    for await (let item of client.projects.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("jobDefinitions list test", async function () {
    const resArray = new Array();
    for await (let item of client.jobDefinitions.list(resourceGroup, storageMoverName, projectName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("storageMovers list test", async function () {
    const resArray = new Array();
    for await (let item of client.storageMovers.listBySubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("jobDefinitions delete test", async function () {
    const resArray = new Array();
    const res = await client.jobDefinitions.beginDeleteAndWait(resourceGroup, storageMoverName, projectName, jobDefinitionName)
    for await (let item of client.jobDefinitions.list(resourceGroup, storageMoverName, projectName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("agent delete test", async function () {
    const resArray = new Array();
    const res = await client.agents.beginDeleteAndWait(resourceGroup, storageMoverName, agentName)
    for await (let item of client.agents.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("endpoints delete test", async function () {
    const resArray = new Array();
    const res = await client.endpoints.beginDeleteAndWait(resourceGroup, storageMoverName, endpointName)
    const res1 = await client.endpoints.beginDeleteAndWait(resourceGroup, storageMoverName, endpointName1)
    for await (let item of client.endpoints.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("projects delete test", async function () {
    const resArray = new Array();
    const res = await client.projects.beginDeleteAndWait(resourceGroup, storageMoverName, projectName)
    for await (let item of client.projects.list(resourceGroup, storageMoverName)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });

  it("storageMovers delete test", async function () {
    const resArray = new Array();
    const res = await client.storageMovers.beginDeleteAndWait(resourceGroup, storageMoverName)
    for await (let item of client.storageMovers.listBySubscription()) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
