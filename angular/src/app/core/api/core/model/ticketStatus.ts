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
import { Ticket } from './ticket';


export interface TicketStatus { 
    id?: number;
    creationDate?: string;
    status?: string | null;
    ticketId?: number;
    ticket?: Ticket;
}

