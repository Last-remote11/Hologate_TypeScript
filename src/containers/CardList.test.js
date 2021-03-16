import { shallow } from 'enzyme'
import React from 'react'
import CardList from './CardList'

test('test CardList component', () => {
  const mockVtuber = [
    {
      id: 1,
      name: 'sakura miko',
      image: 'blah.com',
      gen: 0,
      youtube: 'youtube.com',
      twitter: 'twitter.com'
  }
]
  expect(shallow(<CardList Vtubers={mockVtuber}/>)).toMatchSnapshot()
})