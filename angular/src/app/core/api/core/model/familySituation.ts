/**
 * FOS ANCFCC
 * API documentation
 *
 * The version of the OpenAPI document: v1
 * Contact: abdellah.elbekkali@digitransform.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { User } from './user';


export interface FamilySituation { 
    id?: number;
    label?: string | null;
    users?: Array<User> | null;
}

