import { ContentItem, Elements, ElementType } from '../../../../lib';
import { getDeliveryClientWithJson } from '../../setup';
import * as responseJson from './unknown-element.spec.json';

describe('Unknown element', () => {
    let item: ContentItem;

    beforeAll((done) => {
        getDeliveryClientWithJson(responseJson).items()
            .toObservable()
            .subscribe(result => {
                item = result.items[0];
                done();
            });
    });

    it(`Ufo element should be mapped to UnknownElement`, () => {
        const element = item.ufo as Elements.UnknownElement;
        const rawElement = responseJson.items[0].elements.ufo;

        expect(element).toEqual(jasmine.any(Elements.UnknownElement));

        expect(element.name).toEqual(rawElement.name);
        expect(element.type).toEqual(ElementType.Unknown);
        expect(element.value).toEqual(rawElement.value);
    });

});

