/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { protectionBypassUpdate } from "../funcs/protectionBypassUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  UpdateProjectProtectionBypassRequest,
  UpdateProjectProtectionBypassResponseBody,
} from "../models/operations/updateprojectprotectionbypass.js";
import { unwrapAsync } from "../types/fp.js";

export class ProtectionBypass extends ClientSDK {
  /**
   * Update Protection Bypass for Automation
   *
   * @remarks
   * Update the deployment protection automation bypass for a project
   */
  async update(
    request: UpdateProjectProtectionBypassRequest,
    options?: RequestOptions,
  ): Promise<UpdateProjectProtectionBypassResponseBody> {
    return unwrapAsync(protectionBypassUpdate(
      this,
      request,
      options,
    ));
  }
}
