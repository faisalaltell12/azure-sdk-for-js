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
  ContainerApp as ContainerAppMapper,
  ContainerAppPatch as ContainerAppPatchMapper,
  ManagedEnvironment as ManagedEnvironmentMapper,
  ManagedEnvironmentPatch as ManagedEnvironmentPatchMapper,
  Certificate as CertificateMapper,
  CertificatePatch as CertificatePatchMapper,
  SourceControl as SourceControlMapper,
  DaprComponent as DaprComponentMapper,
  AuthConfig as AuthConfigMapper,
  ManagedEnvironmentStorage as ManagedEnvironmentStorageMapper
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

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-01-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
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

export const containerAppEnvelope: OperationParameter = {
  parameterPath: "containerAppEnvelope",
  mapper: ContainerAppMapper
};

export const containerAppEnvelope1: OperationParameter = {
  parameterPath: "containerAppEnvelope",
  mapper: ContainerAppPatchMapper
};

export const containerAppName: OperationURLParameter = {
  parameterPath: "containerAppName",
  mapper: {
    serializedName: "containerAppName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const customHostname: OperationQueryParameter = {
  parameterPath: ["options", "customHostname"],
  mapper: {
    serializedName: "customHostname",
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

export const revisionName: OperationURLParameter = {
  parameterPath: "revisionName",
  mapper: {
    serializedName: "revisionName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const environmentEnvelope: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ManagedEnvironmentMapper
};

export const environmentEnvelope1: OperationParameter = {
  parameterPath: "environmentEnvelope",
  mapper: ManagedEnvironmentPatchMapper
};

export const managedEnvironmentName: OperationURLParameter = {
  parameterPath: "managedEnvironmentName",
  mapper: {
    serializedName: "managedEnvironmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const certificateEnvelope: OperationParameter = {
  parameterPath: ["options", "certificateEnvelope"],
  mapper: CertificateMapper
};

export const certificateEnvelope1: OperationParameter = {
  parameterPath: "certificateEnvelope",
  mapper: CertificatePatchMapper
};

export const sourceControlEnvelope: OperationParameter = {
  parameterPath: "sourceControlEnvelope",
  mapper: SourceControlMapper
};

export const environmentName: OperationURLParameter = {
  parameterPath: "environmentName",
  mapper: {
    serializedName: "environmentName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const daprComponentEnvelope: OperationParameter = {
  parameterPath: "daprComponentEnvelope",
  mapper: DaprComponentMapper
};

export const authConfigEnvelope: OperationParameter = {
  parameterPath: "authConfigEnvelope",
  mapper: AuthConfigMapper
};

export const envName: OperationURLParameter = {
  parameterPath: "envName",
  mapper: {
    serializedName: "envName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const storageEnvelope: OperationParameter = {
  parameterPath: "storageEnvelope",
  mapper: ManagedEnvironmentStorageMapper
};
