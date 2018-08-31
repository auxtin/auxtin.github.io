import React, { Component, PropTypes } from 'react';
import { Container } from '../../theme/grid';
import {
  Image,
  HeroImage,
  RevealP
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView'
export default class Home extends Component {
  static PropTypes = {};

  render() {
    return (
      <Container>
        <HeroImage>
          <h1>Austin Leonardo</h1>
          <h2>Professional Headass</h2>
        </HeroImage>
        <h1>Home Page</h1>
        {/* <img src={require('../assets/Lubna-Zahid-motif-callig.jpg')} alt='islamic-art'/> */}
        {/* <Image src={require('../../assets/Islamic-art.jpg')} alt='islamic-art2'/> */}
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat facilisis ante, in consequat felis lacinia at. Aliquam et tortor dui. Sed scelerisque sem eget massa accumsan, eu porta ex bibendum. In quis dui interdum, luctus lacus sit amet, congue elit. Nam sodales sem id erat auctor, vel elementum purus ullamcorper. Morbi ac quam tristique, ultricies sapien ac, vulputate mi. Vestibulum imperdiet sagittis arcu, id dictum augue fringilla vitae. Etiam tincidunt ornare felis vel eleifend. Sed semper dignissim dolor, nec hendrerit odio fringilla in. Fusce porta nisl ultricies tortor tincidunt pharetra.
        </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat facilisis ante, in consequat felis lacinia at. Aliquam et tortor dui. Sed scelerisque sem eget massa accumsan, eu porta ex bibendum. In quis dui interdum, luctus lacus sit amet, congue elit. Nam sodales sem id erat auctor, vel elementum purus ullamcorper. Morbi ac quam tristique, ultricies sapien ac, vulputate mi. Vestibulum imperdiet sagittis arcu, id dictum augue fringilla vitae. Etiam tincidunt ornare felis vel eleifend. Sed semper dignissim dolor, nec hendrerit odio fringilla in. Fusce porta nisl ultricies tortor tincidunt pharetra.
        </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat facilisis ante, in consequat felis lacinia at. Aliquam et tortor dui. Sed scelerisque sem eget massa accumsan, eu porta ex bibendum. In quis dui interdum, luctus lacus sit amet, congue elit. Nam sodales sem id erat auctor, vel elementum purus ullamcorper. Morbi ac quam tristique, ultricies sapien ac, vulputate mi. Vestibulum imperdiet sagittis arcu, id dictum augue fringilla vitae. Etiam tincidunt ornare felis vel eleifend. Sed semper dignissim dolor, nec hendrerit odio fringilla in. Fusce porta nisl ultricies tortor tincidunt pharetra.
        </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat facilisis ante, in consequat felis lacinia at. Aliquam et tortor dui. Sed scelerisque sem eget massa accumsan, eu porta ex bibendum. In quis dui interdum, luctus lacus sit amet, congue elit. Nam sodales sem id erat auctor, vel elementum purus ullamcorper. Morbi ac quam tristique, ultricies sapien ac, vulputate mi. Vestibulum imperdiet sagittis arcu, id dictum augue fringilla vitae. Etiam tincidunt ornare felis vel eleifend. Sed semper dignissim dolor, nec hendrerit odio fringilla in. Fusce porta nisl ultricies tortor tincidunt pharetra.
        </RevealP>
          }
        </WhenInView>
        <WhenInView>
          {({ isInView }) =>
            <RevealP hide={!isInView}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat facilisis ante, in consequat felis lacinia at. Aliquam et tortor dui. Sed scelerisque sem eget massa accumsan, eu porta ex bibendum. In quis dui interdum, luctus lacus sit amet, congue elit. Nam sodales sem id erat auctor, vel elementum purus ullamcorper. Morbi ac quam tristique, ultricies sapien ac, vulputate mi. Vestibulum imperdiet sagittis arcu, id dictum augue fringilla vitae. Etiam tincidunt ornare felis vel eleifend. Sed semper dignissim dolor, nec hendrerit odio fringilla in. Fusce porta nisl ultricies tortor tincidunt pharetra.
        </RevealP>
          }
        </WhenInView>

        {/* <img src={require('../assets/islamic-art3.jpg')} alt='islamic-art'/> */}
      </Container>
    );
  }
}
