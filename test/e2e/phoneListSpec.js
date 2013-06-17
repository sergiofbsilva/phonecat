/**
 * Created with JetBrains WebStorm.
 * User: sujay
 * Date: 6/16/13
 * Time: 5:39 PM
 * To change this template use File | Settings | File Templates.
 */
'use strict';

describe('phoneList e2e Test', function() {
    beforeEach(function() {
        browser().navigateTo('/');
        sleep(1);

    });

    it('should display the list of phones', function() {
        expect(repeater('.phones li').count()).toEqual(6);
    });

    it('should be able to filter the list of phones', function(){
        input('query').enter('Dell');
        sleep(2);
        expect(repeater('.phones li').count()).toEqual(2);
    });

    it('should be able to sort the list of phones', function(){
        input('query').enter('Dell');
        sleep(2);
        select('orderProp').option('Alphabetical');
        expect(repeater('.phones li', 'Phone List').column('phone.name')).
            toEqual(['Dell Streak 7', 'Dell Venue']);
        input('query').enter('Motorola');
        sleep(2);
        select('orderProp').option('Newest');
        expect(repeater('.phones li', 'Phone List').column('phone.name')).
            toEqual(['Motorola XOOM\u2122 with Wi-Fi', 'MOTOROLA XOOM\u2122', 'MOTOROLA ATRIX\u2122 4G']);

    });

    it('should render phone specific links', function(){
        input('query').enter('Dell Streak');
        sleep(2);
        element('.phones li a').click();
        expect(browser().location().url()).toBe('/phone/51a8864504a628aaa67ee057');
    });

    it('should be able to expect no phones on wrong url', function(){
        browser().navigateTo('/nophones');
        sleep(1);
        expect(repeater('.phones li').count()).toEqual(0);
    });
});