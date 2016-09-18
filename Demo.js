import React, { Component } from 'react';

import {
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import ViewPager from './ViewPager';

const styles = StyleSheet.create({
  cont: {},
  wrapper: {
    backgroundColor: '#fff',
  },
  slide: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
  },
  image: {
    flex: 1,
  }
});

export default class Demo extends Component {
  onselectedIndexChange() {
  }
  onPress() {
    alert('you clicked');
  }
  render() {
    return (
      <View style={styles.cont}>
        <ViewPager style={styles.wrapper}
                   autoplayTimeout={2}
                   selectedIndex={0}
                   autoplay={true}
                   infinite={true}
                   height={160}
                   loop={true}
                   afterChange={this.onselectedIndexChange}>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={[styles.container, {backgroundColor: '#aaaaaa'}]}>
              <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                     style={{width: 50, height: 50}} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={[styles.container, {backgroundColor: '#bbbbbb'}]}>
              <Text>Carousel 2</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={[styles.container, {backgroundColor: '#cccccc'}]}>
              <Text>Carousel 3</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={[styles.container, {backgroundColor: '#dddddd'}]}>
              <Text>Carousel 4</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.onPress}>
            <View style={styles.container}>
              <Text>Carousel 5</Text>
            </View>
          </TouchableWithoutFeedback>
        </ViewPager>

        <ViewPager style={styles.wrapper}
                   autoplayTimeout={2}
                   selectedIndex={0}
                   autoplay={true}
                   infinite={false}
                   height={160}
                   loop={false}
                   afterChange={this.onselectedIndexChange}>
          <View style={[styles.container, {backgroundColor: '#aaaaaa'}]}>
            <TouchableWithoutFeedback onPress={this.onPress}>
              <View style={styles.container}>
                <Text>Only one Slide</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </ViewPager>

      </View>
    );
  }
}
