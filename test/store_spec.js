/**
 * Created by sanjoy on 11/10/15.
 */
import {Map, fromJS} from 'immutable';
import {expect} from 'chai';

import makeStore from '../src/store';

describe('store', ()=>{
    const entries = ['300', 'Avatar', 'Inception', 'Equalizer'];
    const store = makeStore();
    expect(store.getState()).to.equal(Map())

    store.dispatch({
        type:"SET_ENTRIES",
        entries: entries
    });
    expect(store.getState()).to.equal(fromJS({
        entries: entries
    }))
})

