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
import { MemberShipService } from './memberShipService';


export interface HistoryStatus { 
    id?: number;
    status?: string | null;
    userId?: number;
    user?: User;
    memberShipServiceId?: number;
    memberShipService?: MemberShipService;
    creationDate?: string;
}

