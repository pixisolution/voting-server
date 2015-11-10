/**
 * Created by sanjoy on 11/10/15.
 */
import {createStore} from 'redux';
import reducer from './reducer'

export default function makeStore(){
    return createStore(reducer)
}