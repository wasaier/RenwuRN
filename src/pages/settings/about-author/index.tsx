import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {BNavBar} from '../../../components/BPage/BNavBar';

const title = '语惬社区';
const avatar_url =
  'https://mall.s.maizuo.com/503e28f40d91666e7b2317589f653c46.jpg?x-oss-process=image/resize,w_563';

// 关于作者
export default class AboutAuthor extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  _renderStickyHeader = () => {
    return (
      <BNavBar
        backIconStyle={{color: '#333'}}
        title={() => {
          return (
            <Image
              style={{width: 24, height: 24, borderRadius: 20}}
              source={{uri: avatar_url}}
            />
          );
        }}
        showBack
      />
    );
  };

  _renderFixedHeader = () => {
    return (
      <View key="fixed-header" style={styles.fixedSection}>
        <BNavBar
          backIconStyle={{color: '#fff'}}
          containerStyle={{backgroundColor: 'transparent'}}
          title={''}
          showBack
        />
      </View>
    );
  };

  scrollRef = null;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ParallaxScrollView
          ref={(ref: any) => this.scrollRef = ref}
      onScroll={(e: any) => {
        console.log(this.scrollRef)
      }}
        headerBackgroundColor="transparent"
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        backgroundSpeed={10}
        renderBackground={() => (
          <View key="background">
            <Image style={styles.card_mask_img} source={{uri: avatar_url}} />
            <View style={styles.card_mask} />
          </View>
        )}
        renderForeground={() => (
          <View key="parallax-header" style={styles.parallaxHeader}>
            <Image style={styles.avatar} source={{uri: avatar_url}} />
            <Text style={styles.sectionSpeakerText}>{title}</Text>
            <Text style={styles.sectionTitleText}>大聪明科技有限公司</Text>
          </View>
        )}
        renderStickyHeader={this._renderStickyHeader}
        renderFixedHeader={this._renderFixedHeader}
      />
      </View>
    );
    // const { onScroll = () => {} } = this.props;
    // return (
    //   <ListView
    //     ref="ListView"
    //     style={styles.container}
    //     dataSource={ this.state.dataSource }
    //     renderRow={(rowData) => (
    //       <View key={rowData} style={ styles.row }>
    //         <Text style={ styles.rowText }>{ rowData }</Text>
    //       </View>
    //      )}
    //     renderScrollComponent={props => (
    //       <ParallaxScrollView
    //         onScroll={onScroll}
    //         headerBackgroundColor="#333"
    //         stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
    //         parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
    //         backgroundSpeed={10}
    //         renderBackground={() => (
    //           <View key="background">
    //             <Image style={styles.card_mask_img} source={{ uri: avatar_url}}/>
    //             <View style={styles.card_mask}/>
    //           </View>
    //         )}
    //         renderForeground={() => (
    //           <View key="parallax-header" style={ styles.parallaxHeader }>
    //             <Image style={styles.avatar} source={{uri: avatar_url}}/>
    //             <Text style={styles.sectionSpeakerText}>语锲社区</Text>
    //             <Text style={styles.sectionTitleText}>专注Web/JS/移动端</Text>
    //           </View>
    //         )}
    //         renderStickyHeader={this._renderStickyHeader}
    //         renderFixedHeader={this._renderFixedHeader}
    //       />
    //     )}
    //   />
    // );
  }
}

const window = Dimensions.get('window');
const AVATAR_SIZE = 80;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 90;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stickySection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
    height: STICKY_HEADER_HEIGHT,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  fixedSectionText: {
    color: '#fff',
    fontSize: 14,
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 60,
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5,
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 14,
    paddingVertical: 5,
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  rowText: {
    fontSize: 20,
  },
  // banner
  card_mask: {
    position: 'absolute',
    top: 0,
    width: window.width,
    backgroundColor: 'rgba(0, 0, 0, .4)',
    height: PARALLAX_HEADER_HEIGHT,
  },
  card_mask_img: {
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2,
  },
  stickySectionText: {
    color: 'white',
    fontSize: 18,
  },
  fixedSection: {
    position: 'absolute',
    top: 0,
    left: 0
    // left: 10,
    // alignItems: 'center',
  },
});
