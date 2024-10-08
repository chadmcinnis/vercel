/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { envsCreate } from "../funcs/envsCreate.js";
import { envsDelete } from "../funcs/envsDelete.js";
import { envsGet } from "../funcs/envsGet.js";
import { envsListByProject } from "../funcs/envsListByProject.js";
import { envsUpdate } from "../funcs/envsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateProjectEnvRequest,
  CreateProjectEnvResponseBody,
} from "../models/operations/createprojectenv.js";
import {
  EditProjectEnvRequest,
  EditProjectEnvResponseBody,
} from "../models/operations/editprojectenv.js";
import {
  FilterProjectEnvsRequest,
  FilterProjectEnvsResponseBody,
} from "../models/operations/filterprojectenvs.js";
import {
  GetProjectEnvRequest,
  GetProjectEnvResponseBody,
} from "../models/operations/getprojectenv.js";
import {
  RemoveProjectEnvRequest,
  RemoveProjectEnvResponseBody,
} from "../models/operations/removeprojectenv.js";
import { unwrapAsync } from "../types/fp.js";

export class Envs extends ClientSDK {
  /**
   * Retrieve the environment variables of a project by id or name
   *
   * @remarks
   * Retrieve the environment variables for a given project by passing either the project `id` or `name` in the URL.
   */
  async listByProject(
    request: FilterProjectEnvsRequest,
    options?: RequestOptions,
  ): Promise<FilterProjectEnvsResponseBody> {
    return unwrapAsync(envsListByProject(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve the decrypted value of an environment variable of a project by id
   *
   * @remarks
   * Retrieve the environment variable for a given project.
   */
  async get(
    request: GetProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<GetProjectEnvResponseBody> {
    return unwrapAsync(envsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Create one or more environment variables
   *
   * @remarks
   * Create one ore more environment variables for a project by passing its `key`, `value`, `type` and `target` and by specifying the project by either passing the project `id` or `name` in the URL.
   */
  async create(
    request: CreateProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<CreateProjectEnvResponseBody> {
    return unwrapAsync(envsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Remove an environment variable
   *
   * @remarks
   * Delete a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
   */
  async delete(
    request: RemoveProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<RemoveProjectEnvResponseBody> {
    return unwrapAsync(envsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Edit an environment variable
   *
   * @remarks
   * Edit a specific environment variable for a given project by passing the environment variable identifier and either passing the project `id` or `name` in the URL.
   */
  async update(
    request: EditProjectEnvRequest,
    options?: RequestOptions,
  ): Promise<EditProjectEnvResponseBody> {
    return unwrapAsync(envsUpdate(
      this,
      request,
      options,
    ));
  }
}
