/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Messages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClient } from "../storageClient";
import {
  MessagesDequeueOptionalParams,
  MessagesDequeueResponse,
  MessagesClearOptionalParams,
  MessagesClearResponse,
  QueueMessage,
  MessagesEnqueueOptionalParams,
  MessagesEnqueueResponse,
  MessagesPeekOptionalParams,
  MessagesPeekResponse
} from "../models";

/** Class containing Messages operations. */
export class MessagesImpl implements Messages {
  private readonly client: StorageClient;

  /**
   * Initialize a new instance of the class Messages class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClient) {
    this.client = client;
  }

  /**
   * The Dequeue operation retrieves one or more messages from the front of the queue.
   * @param options The options parameters.
   */
  dequeue(
    options?: MessagesDequeueOptionalParams
  ): Promise<MessagesDequeueResponse> {
    return this.client.sendOperationRequest({ options }, dequeueOperationSpec);
  }

  /**
   * The Clear operation deletes all messages from the specified queue.
   * @param options The options parameters.
   */
  clear(options?: MessagesClearOptionalParams): Promise<MessagesClearResponse> {
    return this.client.sendOperationRequest({ options }, clearOperationSpec);
  }

  /**
   * The Enqueue operation adds a new message to the back of the message queue. A visibility timeout can
   * also be specified to make the message invisible until the visibility timeout expires. A message must
   * be in a format that can be included in an XML request with UTF-8 encoding. The encoded message can
   * be up to 64 KB in size for versions 2011-08-18 and newer, or 8 KB in size for previous versions.
   * @param queueMessage A Message object which can be stored in a Queue
   * @param options The options parameters.
   */
  enqueue(
    queueMessage: QueueMessage,
    options?: MessagesEnqueueOptionalParams
  ): Promise<MessagesEnqueueResponse> {
    return this.client.sendOperationRequest(
      { queueMessage, options },
      enqueueOperationSpec
    );
  }

  /**
   * The Peek operation retrieves one or more messages from the front of the queue, but does not alter
   * the visibility of the message.
   * @param options The options parameters.
   */
  peek(options?: MessagesPeekOptionalParams): Promise<MessagesPeekResponse> {
    return this.client.sendOperationRequest({ options }, peekOperationSpec);
  }
}
// Operation Specifications
const xmlSerializer = coreClient.createSerializer(Mappers, /* isXml */ true);

const dequeueOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}/messages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "DequeuedMessageItem" }
          }
        },
        serializedName: "DequeuedMessagesList",
        xmlName: "QueueMessagesList",
        xmlIsWrapped: true,
        xmlElementName: "QueueMessage"
      },
      headersMapper: Mappers.MessagesDequeueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessagesDequeueExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.numberOfMessages,
    Parameters.visibilityTimeout
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const clearOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}/messages",
  httpMethod: "DELETE",
  responses: {
    204: {
      headersMapper: Mappers.MessagesClearHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessagesClearExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
const enqueueOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}/messages",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: { type: { name: "Composite", className: "EnqueuedMessage" } }
        },
        serializedName: "EnqueuedMessageList",
        xmlName: "QueueMessagesList",
        xmlIsWrapped: true,
        xmlElementName: "QueueMessage"
      },
      headersMapper: Mappers.MessagesEnqueueHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessagesEnqueueExceptionHeaders
    }
  },
  requestBody: Parameters.queueMessage,
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.visibilityTimeout,
    Parameters.messageTimeToLive
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.version,
    Parameters.requestId
  ],
  isXML: true,
  contentType: "application/xml; charset=utf-8",
  mediaType: "xml",
  serializer: xmlSerializer
};
const peekOperationSpec: coreClient.OperationSpec = {
  path: "/{queueName}/messages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: {
          name: "Sequence",
          element: {
            type: { name: "Composite", className: "PeekedMessageItem" }
          }
        },
        serializedName: "PeekedMessagesList",
        xmlName: "QueueMessagesList",
        xmlIsWrapped: true,
        xmlElementName: "QueueMessage"
      },
      headersMapper: Mappers.MessagesPeekHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.MessagesPeekExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.numberOfMessages,
    Parameters.peekonly
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.requestId,
    Parameters.accept1
  ],
  isXML: true,
  serializer: xmlSerializer
};
