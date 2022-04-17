import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {RootStackParamList} from '@/navigator';
import {BottomTabParamList} from '@/navigator/BottomTabs';
import FeedAPI from '@/services/feed';
import {IFeed} from '@/types/IFeed';
import BPage from '@/components/BPage';
import Loading from '@/components/Loading';
import BRefreshControl from '@/components/BRefreshControl';
import FeedItem from './FeedItem';

type IProps = CompositeScreenProps<
  BottomTabScreenProps<BottomTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

const FindScreen: React.FC<IProps> = ({navigation}) => {
  const [state, setState] = React.useState([] as IFeed[]);
  const [loading, setLoading] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    FeedAPI.getFeedList().then(res => {
      setState(res.data.list);
      setLoading(false);
    });
  }, []);

  const toDetail = ({id}: {id: number}) => {
    navigation.navigate('Post', {
      id,
    });
  };

  const renderIt = (it: IFeed, index: number) => {
    return <FeedItem it={it} toDetail={toDetail} />;
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const refreshControl = (
    <BRefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  const renderBody = () => {
    if (loading) {
      return <Loading />;
    }
    return (
      <ScrollView refreshControl={refreshControl}>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingTop: 6}}>
          {state.map(renderIt)}
        </View>
      </ScrollView>
    );
  };

  return (
    <BPage title="发现" showBack={false}>
      {renderBody()}
    </BPage>
  );
};

export default FindScreen;
