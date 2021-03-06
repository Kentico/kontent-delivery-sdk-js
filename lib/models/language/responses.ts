import { IBaseResponse } from '@kentico/kontent-core';

import { BaseKontentResponseStandardDebug, Pagination } from '../common';
import { Language } from './language-models';

export namespace LanguageResponses {

    export class ListLanguagesResponse extends BaseKontentResponseStandardDebug {
        constructor(
            /**
             * List of languages
             */
            public languages: Language[],

            /**
             * Pagination
             */
            public pagination: Pagination,

            /**
             * Response
             */
            response: IBaseResponse<any>,
            isDeveloperMode: boolean
        ) {
            super(response, isDeveloperMode);
        }
    }
}
