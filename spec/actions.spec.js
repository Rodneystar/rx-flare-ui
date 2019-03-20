import * as actions from '../src/actions'
import {expect} from 'chai'

describe('get list action creator returns get list action', function() {
    it('returns the action', function() {
        let {GET_TIMER_LIST, getTimerList} = actions; 

        expect({ type: GET_TIMER_LIST }).to.eql(getTimerList())
    })
})