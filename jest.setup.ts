/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme'
import React16Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new React16Adapter() })
