/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
 *
 * @summary Delete a consumer group from an Event Hub-compatible endpoint in an IoT hub.
 * x-ms-original-file: specification/iothub/resource-manager/Microsoft.Devices/stable/2021-07-02/examples/iothub_deleteconsumergroup.json
 */
const { IotHubClient } = require("@azure/arm-iothub");
const { DefaultAzureCredential } = require("@azure/identity");

async function iotHubResourceDeleteEventHubConsumerGroup() {
  const subscriptionId = "91d12660-3dec-467a-be2a-213b5544ddc0";
  const resourceGroupName = "myResourceGroup";
  const resourceName = "testHub";
  const eventHubEndpointName = "events";
  const name = "test";
  const credential = new DefaultAzureCredential();
  const client = new IotHubClient(credential, subscriptionId);
  const result = await client.iotHubResource.deleteEventHubConsumerGroup(
    resourceGroupName,
    resourceName,
    eventHubEndpointName,
    name
  );
  console.log(result);
}

iotHubResourceDeleteEventHubConsumerGroup().catch(console.error);
