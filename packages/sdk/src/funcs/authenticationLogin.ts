/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  EmailLoginRequestBody,
  EmailLoginRequestBody$outboundSchema,
  EmailLoginResponseBody,
  EmailLoginResponseBody$inboundSchema,
} from "../models/operations/emaillogin.js";
import { Result } from "../types/fp.js";

/**
 * Login with email
 *
 * @remarks
 * Request a new login for a user to get a token. This will respond with a verification token and send an email to confirm the request. Once confirmed you can use the verification token to get an authentication token.
 */
export async function authenticationLogin(
  client: VercelCore,
  request?: EmailLoginRequestBody | undefined,
  options?: RequestOptions,
): Promise<
  Result<
    EmailLoginResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input = request;

  const parsed = safeParse(
    input,
    (value) => EmailLoginRequestBody$outboundSchema.optional().parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload === undefined
    ? null
    : encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/registration")();

  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });

  const context = {
    operationID: "emailLogin",
    oAuth2Scopes: [],
    securitySource: null,
  };

  const requestRes = client._createRequest(context, {
    method: "POST",
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "4XX", "5XX"],
    retryConfig: options?.retries
      || client._options.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    EmailLoginResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, EmailLoginResponseBody$inboundSchema),
    M.fail([400, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}
