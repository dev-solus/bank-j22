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
import { EventCategory } from './eventCategory';
import { User } from './user';
import { City } from './city';


export interface Event { 
    id?: number;
    creationDate?: string;
    imagePath?: string | null;
    status?: string | null;
    title?: string | null;
    content?: string | null;
    type?: string | null;
    limitParticipation?: number;
    participants?: string | null;
    cityId?: number;
    city?: City;
    eventCategoryId?: number;
    eventCategory?: EventCategory;
    userId?: number;
    user?: User;
}

