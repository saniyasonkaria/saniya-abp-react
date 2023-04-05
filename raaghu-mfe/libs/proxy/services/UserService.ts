/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Volo_Abp_Account_IsLinkedInput } from '../models/Volo_Abp_Account_IsLinkedInput';
import type { Volo_Abp_Account_LinkUserInput } from '../models/Volo_Abp_Account_LinkUserInput';
import type { Volo_Abp_Account_UnLinkUserInput } from '../models/Volo_Abp_Account_UnLinkUserInput';
import type { Volo_Abp_Account_VerifyLinkLoginTokenInput } from '../models/Volo_Abp_Account_VerifyLinkLoginTokenInput';
import type { Volo_Abp_Account_VerifyLinkTokenInput } from '../models/Volo_Abp_Account_VerifyLinkTokenInput';
import type { Volo_Abp_Application_Dtos_ListResultDto_1 } from '../models/Volo_Abp_Application_Dtos_ListResultDto_1';
import type { Volo_Abp_Application_Dtos_PagedResultDto_1 } from '../models/Volo_Abp_Application_Dtos_PagedResultDto_1';
import type { Volo_Abp_Identity_ClaimTypeDto } from '../models/Volo_Abp_Identity_ClaimTypeDto';
import type { Volo_Abp_Identity_ExternalLoginProviderDto } from '../models/Volo_Abp_Identity_ExternalLoginProviderDto';
import type { Volo_Abp_Identity_IdentityRoleLookupDto } from '../models/Volo_Abp_Identity_IdentityRoleLookupDto';
import type { Volo_Abp_Identity_IdentityUserClaimDto } from '../models/Volo_Abp_Identity_IdentityUserClaimDto';
import type { Volo_Abp_Identity_IdentityUserCreateDto } from '../models/Volo_Abp_Identity_IdentityUserCreateDto';
import type { Volo_Abp_Identity_IdentityUserDto } from '../models/Volo_Abp_Identity_IdentityUserDto';
import type { Volo_Abp_Identity_IdentityUserUpdateDto } from '../models/Volo_Abp_Identity_IdentityUserUpdateDto';
import type { Volo_Abp_Identity_IdentityUserUpdatePasswordInput } from '../models/Volo_Abp_Identity_IdentityUserUpdatePasswordInput';
import type { Volo_Abp_Identity_IdentityUserUpdateRolesDto } from '../models/Volo_Abp_Identity_IdentityUserUpdateRolesDto';
import type { Volo_Abp_Identity_ImportExternalUserInput } from '../models/Volo_Abp_Identity_ImportExternalUserInput';
import type { Volo_Abp_Identity_OrganizationUnitDto } from '../models/Volo_Abp_Identity_OrganizationUnitDto';
import type { Volo_Abp_Identity_OrganizationUnitLookupDto } from '../models/Volo_Abp_Identity_OrganizationUnitLookupDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postLinkUserLink({
requestBody,
}: {
requestBody?: Volo_Abp_Account_LinkUserInput,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/link',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static postLinkUserUnlink({
requestBody,
}: {
requestBody?: Volo_Abp_Account_UnLinkUserInput,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/unlink',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns boolean Success
     * @throws ApiError
     */
    public static postLinkUserIsLinked({
requestBody,
}: {
requestBody?: Volo_Abp_Account_IsLinkedInput,
}): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/is-linked',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static postLinkUserGenerateLinkToken(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/generate-link-token',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns boolean Success
     * @throws ApiError
     */
    public static postLinkUserVerifyLinkToken({
requestBody,
}: {
requestBody?: Volo_Abp_Account_VerifyLinkTokenInput,
}): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/verify-link-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns string Success
     * @throws ApiError
     */
    public static postLinkUserGenerateLinkLoginToken(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/generate-link-login-token',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns boolean Success
     * @throws ApiError
     */
    public static postLinkUserVerifyLinkLoginToken({
requestBody,
}: {
requestBody?: Volo_Abp_Account_VerifyLinkLoginTokenInput,
}): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/account/link-user/verify-link-login-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_ListResultDto_1<any> Success
     * @throws ApiError
     */
    public static getLinkUser(): CancelablePromise<Volo_Abp_Application_Dtos_ListResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/account/link-user',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static getUsers({
id,
}: {
id: string,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static putUsers({
id,
requestBody,
}: {
id: string,
requestBody?: Volo_Abp_Identity_IdentityUserUpdateDto,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static deleteUsers({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/identity/users/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_PagedResultDto_1<any> Success
     * @throws ApiError
     */
    public static getUsers1({
filter,
roleId,
organizationUnitId,
userName,
phoneNumber,
emailAddress,
isLockedOut,
notActive,
sorting,
skipCount,
maxResultCount,
}: {
filter?: string,
roleId?: string,
organizationUnitId?: string,
userName?: string,
phoneNumber?: string,
emailAddress?: string,
isLockedOut?: boolean,
notActive?: boolean,
sorting?: string,
skipCount?: number,
maxResultCount?: number,
}): CancelablePromise<Volo_Abp_Application_Dtos_PagedResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users',
            query: {
                'Filter': filter,
                'RoleId': roleId,
                'OrganizationUnitId': organizationUnitId,
                'UserName': userName,
                'PhoneNumber': phoneNumber,
                'EmailAddress': emailAddress,
                'IsLockedOut': isLockedOut,
                'NotActive': notActive,
                'Sorting': sorting,
                'SkipCount': skipCount,
                'MaxResultCount': maxResultCount,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static postUsers({
requestBody,
}: {
requestBody?: Volo_Abp_Identity_IdentityUserCreateDto,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/identity/users',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_ListResultDto_1<any> Success
     * @throws ApiError
     */
    public static getUsersRoles({
id,
}: {
id: string,
}): CancelablePromise<Volo_Abp_Application_Dtos_ListResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/{id}/roles',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersRoles({
id,
requestBody,
}: {
id: string,
requestBody?: Volo_Abp_Identity_IdentityUserUpdateRolesDto,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/roles',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_ListResultDto_1<any> Success
     * @throws ApiError
     */
    public static getUsersAssignableRoles(): CancelablePromise<Volo_Abp_Application_Dtos_ListResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/assignable-roles',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Application_Dtos_ListResultDto_1<any> Success
     * @throws ApiError
     */
    public static getUsersAvailableOrganizationUnits(): CancelablePromise<Volo_Abp_Application_Dtos_ListResultDto_1> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/available-organization-units',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_ClaimTypeDto Success
     * @throws ApiError
     */
    public static getUsersAllClaimTypes(): CancelablePromise<Array<Volo_Abp_Identity_ClaimTypeDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/all-claim-types',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserClaimDto Success
     * @throws ApiError
     */
    public static getUsersClaims({
id,
}: {
id: string,
}): CancelablePromise<Array<Volo_Abp_Identity_IdentityUserClaimDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/{id}/claims',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersClaims({
id,
requestBody,
}: {
id: string,
requestBody?: Array<Volo_Abp_Identity_IdentityUserClaimDto>,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/claims',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_OrganizationUnitDto Success
     * @throws ApiError
     */
    public static getUsersOrganizationUnits({
id,
}: {
id: string,
}): CancelablePromise<Array<Volo_Abp_Identity_OrganizationUnitDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/{id}/organization-units',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersLock({
id,
lockoutEnd,
}: {
id: string,
lockoutEnd: string,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/lock/{lockoutEnd}',
            path: {
                'id': id,
                'lockoutEnd': lockoutEnd,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersUnlock({
id,
}: {
id: string,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/unlock',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static getUsersByUsername({
username,
}: {
username: string,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/by-username/{username}',
            path: {
                'username': username,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static getUsersByEmail({
email,
}: {
email: string,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/by-email/{email}',
            path: {
                'email': email,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns boolean Success
     * @throws ApiError
     */
    public static getUsersTwoFactorEnabled({
id,
}: {
id: string,
}): CancelablePromise<boolean> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/{id}/two-factor-enabled',
            path: {
                'id': id,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersTwoFactor({
id,
enabled,
}: {
id: string,
enabled: boolean,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/two-factor/{enabled}',
            path: {
                'id': id,
                'enabled': enabled,
            },
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static putUsersChangePassword({
id,
requestBody,
}: {
id: string,
requestBody?: Volo_Abp_Identity_IdentityUserUpdatePasswordInput,
}): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/identity/users/{id}/change-password',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityRoleLookupDto Success
     * @throws ApiError
     */
    public static getUsersLookupRoles(): CancelablePromise<Array<Volo_Abp_Identity_IdentityRoleLookupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/lookup/roles',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_OrganizationUnitLookupDto Success
     * @throws ApiError
     */
    public static getUsersLookupOrganizationUnits(): CancelablePromise<Array<Volo_Abp_Identity_OrganizationUnitLookupDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/lookup/organization-units',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_ExternalLoginProviderDto Success
     * @throws ApiError
     */
    public static getUsersExternalLoginProviders(): CancelablePromise<Array<Volo_Abp_Identity_ExternalLoginProviderDto>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/identity/users/external-login-Providers',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

    /**
     * @returns Volo_Abp_Identity_IdentityUserDto Success
     * @throws ApiError
     */
    public static postUsersImportExternalUser({
requestBody,
}: {
requestBody?: Volo_Abp_Identity_ImportExternalUserInput,
}): CancelablePromise<Volo_Abp_Identity_IdentityUserDto> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/identity/users/import-external-user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
                500: `Server Error`,
                501: `Server Error`,
            },
        });
    }

}
