import { IHydraResource } from "./IHydraResource";
import { IResource } from "./IResource";

/**
 * Describes a link to another resource.
 * @interface
 */

export interface ILink extends IHydraResource {
  /**
   * Gets a relation of the link.
   * @readonly
   * @returns {string}
   */
  readonly relation: string;
  /**
   * Gets a base URL that can be used to resolve target in case it is relative.
   * @readonly
   * @returns {string}
   */
  readonly baseUrl: string;

  /**
   * Gets a target URL to be called.
   * @readonly
   * @returns {IResource}
   */
  readonly target: IResource;
}
