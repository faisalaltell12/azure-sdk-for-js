/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  IotHubDescription as IotHubDescriptionMapper,
  TagsResource as TagsResourceMapper,
  EventHubConsumerGroupBodyDescription as EventHubConsumerGroupBodyDescriptionMapper,
  OperationInputs as OperationInputsMapper,
  TestAllRoutesInput as TestAllRoutesInputMapper,
  TestRouteInput as TestRouteInputMapper,
  ExportDevicesRequest as ExportDevicesRequestMapper,
  ImportDevicesRequest as ImportDevicesRequestMapper,
  CertificateDescription as CertificateDescriptionMapper,
  CertificateVerificationDescription as CertificateVerificationDescriptionMapper,
  FailoverInput as FailoverInputMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-11-15-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceName: OperationURLParameter = {
  parameterPath: "resourceName",
  mapper: {
    serializedName: "resourceName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const iotHubDescription: OperationParameter = {
  parameterPath: "iotHubDescription",
  mapper: IotHubDescriptionMapper
};

export const ifMatch: OperationParameter = {
  parameterPath: ["options", "ifMatch"],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};

export const iotHubTags: OperationParameter = {
  parameterPath: "iotHubTags",
  mapper: TagsResourceMapper
};

export const eventHubEndpointName: OperationURLParameter = {
  parameterPath: "eventHubEndpointName",
  mapper: {
    serializedName: "eventHubEndpointName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const consumerGroupBody: OperationParameter = {
  parameterPath: "consumerGroupBody",
  mapper: EventHubConsumerGroupBodyDescriptionMapper
};

export const jobId: OperationURLParameter = {
  parameterPath: "jobId",
  mapper: {
    serializedName: "jobId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const iotHubName: OperationURLParameter = {
  parameterPath: "iotHubName",
  mapper: {
    serializedName: "iotHubName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const operationInputs: OperationParameter = {
  parameterPath: "operationInputs",
  mapper: OperationInputsMapper
};

export const input: OperationParameter = {
  parameterPath: "input",
  mapper: TestAllRoutesInputMapper
};

export const input1: OperationParameter = {
  parameterPath: "input",
  mapper: TestRouteInputMapper
};

export const keyName: OperationURLParameter = {
  parameterPath: "keyName",
  mapper: {
    serializedName: "keyName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const exportDevicesParameters: OperationParameter = {
  parameterPath: "exportDevicesParameters",
  mapper: ExportDevicesRequestMapper
};

export const importDevicesParameters: OperationParameter = {
  parameterPath: "importDevicesParameters",
  mapper: ImportDevicesRequestMapper
};

export const certificateName: OperationURLParameter = {
  parameterPath: "certificateName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[A-Za-z0-9-._]{1,64}$")
    },
    serializedName: "certificateName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateDescription: OperationParameter = {
  parameterPath: "certificateDescription",
  mapper: CertificateDescriptionMapper
};

export const ifMatch1: OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    serializedName: "If-Match",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateVerificationBody: OperationParameter = {
  parameterPath: "certificateVerificationBody",
  mapper: CertificateVerificationDescriptionMapper
};

export const failoverInput: OperationParameter = {
  parameterPath: "failoverInput",
  mapper: FailoverInputMapper
};

export const groupId: OperationURLParameter = {
  parameterPath: "groupId",
  mapper: {
    serializedName: "groupId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const privateEndpointConnection: OperationParameter = {
  parameterPath: "privateEndpointConnection",
  mapper: PrivateEndpointConnectionMapper
};
