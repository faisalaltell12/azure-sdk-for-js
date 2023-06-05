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
  ClassificationPolicy as ClassificationPolicyMapper,
  DistributionPolicy as DistributionPolicyMapper,
  ExceptionPolicy as ExceptionPolicyMapper,
  JobQueue as JobQueueMapper,
  RouterJob as RouterJobMapper,
  CancelJobRequest as CancelJobRequestMapper,
  CompleteJobRequest as CompleteJobRequestMapper,
  CloseJobRequest as CloseJobRequestMapper,
  DeclineJobOfferRequest as DeclineJobOfferRequestMapper,
  RouterWorker as RouterWorkerMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/merge-patch+json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const patch: OperationParameter = {
  parameterPath: "patch",
  mapper: ClassificationPolicyMapper
};

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

export const endpoint: OperationURLParameter = {
  parameterPath: "endpoint",
  mapper: {
    serializedName: "endpoint",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2022-07-18-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    defaultValue: -1,
    serializedName: "maxPageSize",
    type: {
      name: "Number"
    }
  }
};

export const patch1: OperationParameter = {
  parameterPath: "patch",
  mapper: DistributionPolicyMapper
};

export const patch2: OperationParameter = {
  parameterPath: "patch",
  mapper: ExceptionPolicyMapper
};

export const patch3: OperationParameter = {
  parameterPath: "patch",
  mapper: JobQueueMapper
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

export const patch4: OperationParameter = {
  parameterPath: "patch",
  mapper: RouterJobMapper
};

export const contentType1: OperationParameter = {
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

export const reclassifyJobRequest: OperationParameter = {
  parameterPath: ["options", "reclassifyJobRequest"],
  mapper: {
    serializedName: "reclassifyJobRequest",
    type: {
      name: "any"
    }
  }
};

export const note: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CancelJobRequestMapper
};

export const dispositionCode: OperationParameter = {
  parameterPath: ["options", "dispositionCode"],
  mapper: CancelJobRequestMapper
};

export const assignmentId: OperationParameter = {
  parameterPath: "assignmentId",
  mapper: CompleteJobRequestMapper
};

export const note1: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CompleteJobRequestMapper
};

export const assignmentId1: OperationParameter = {
  parameterPath: "assignmentId",
  mapper: CloseJobRequestMapper
};

export const dispositionCode1: OperationParameter = {
  parameterPath: ["options", "dispositionCode"],
  mapper: CloseJobRequestMapper
};

export const closeTime: OperationParameter = {
  parameterPath: ["options", "closeTime"],
  mapper: CloseJobRequestMapper
};

export const note2: OperationParameter = {
  parameterPath: ["options", "note"],
  mapper: CloseJobRequestMapper
};

export const status: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    defaultValue: "all",
    serializedName: "status",
    type: {
      name: "Enum",
      allowedValues: [
        "all",
        "pendingClassification",
        "queued",
        "assigned",
        "completed",
        "closed",
        "cancelled",
        "classificationFailed",
        "created",
        "pendingSchedule",
        "scheduled",
        "scheduleFailed",
        "waitingForActivation",
        "active"
      ]
    }
  }
};

export const queueId: OperationQueryParameter = {
  parameterPath: ["options", "queueId"],
  mapper: {
    serializedName: "queueId",
    type: {
      name: "String"
    }
  }
};

export const channelId: OperationQueryParameter = {
  parameterPath: ["options", "channelId"],
  mapper: {
    serializedName: "channelId",
    type: {
      name: "String"
    }
  }
};

export const classificationPolicyId: OperationQueryParameter = {
  parameterPath: ["options", "classificationPolicyId"],
  mapper: {
    serializedName: "classificationPolicyId",
    type: {
      name: "String"
    }
  }
};

export const scheduledBefore: OperationQueryParameter = {
  parameterPath: ["options", "scheduledBefore"],
  mapper: {
    serializedName: "scheduledBefore",
    type: {
      name: "DateTime"
    }
  }
};

export const scheduledAfter: OperationQueryParameter = {
  parameterPath: ["options", "scheduledAfter"],
  mapper: {
    serializedName: "scheduledAfter",
    type: {
      name: "DateTime"
    }
  }
};

export const assignmentId2: OperationURLParameter = {
  parameterPath: "assignmentId",
  mapper: {
    serializedName: "assignmentId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const workerId: OperationURLParameter = {
  parameterPath: "workerId",
  mapper: {
    serializedName: "workerId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const offerId: OperationURLParameter = {
  parameterPath: "offerId",
  mapper: {
    serializedName: "offerId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const declineJobOfferRequest: OperationParameter = {
  parameterPath: ["options", "declineJobOfferRequest"],
  mapper: DeclineJobOfferRequestMapper
};

export const patch5: OperationParameter = {
  parameterPath: "patch",
  mapper: RouterWorkerMapper
};

export const status1: OperationQueryParameter = {
  parameterPath: ["options", "status"],
  mapper: {
    defaultValue: "all",
    serializedName: "status",
    type: {
      name: "Enum",
      allowedValues: ["active", "draining", "inactive", "all"]
    }
  }
};

export const hasCapacity: OperationQueryParameter = {
  parameterPath: ["options", "hasCapacity"],
  mapper: {
    serializedName: "hasCapacity",
    type: {
      name: "Boolean"
    }
  }
};
