import * as React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Keyboard,
  RefreshControl
} from 'react-native';
// or any pure javascript modules available in npm
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector, useDispatch } from 'react-redux';
import User from '../../Layouts/User';
import { getUsersAction, getUsersActionRefresh,searchUsers } from '../../../redux/actions/actionsTypes';
export default function ListUser() {
  const [text, setOnChangeText] = React.useState('');
  const [refreshing, setRefresing] = React.useState(false);
  const dispatch = useDispatch();
  const changeTextHandler = e => {
    setOnChangeText(e)
    dispatch(searchUsers(e))
  };
  const renderItem = user => <User user={user.item} />;
 
  const Users = useSelector(state => state.getUsersReducer.users)
  const Loading = useSelector(state => state.getUsersReducer.loading)
  const CurrentPage = useSelector(state => state.getUsersReducer.currentPage)
  const TotalPages = useSelector(state => state.getUsersReducer.total_pages)
  // const [onEndReachedCalledDuringMomentum, setOnEndReachedCalledDuringMomentum] = React.useState(true)
  console.log(CurrentPage,TotalPages);
  const loadMore = () => {
    return (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
  }
  const loadMoreItem = () => {
    // console.log(CurrentPage);
    if (CurrentPage < TotalPages) {
      dispatch(getUsersAction(`users?page=${CurrentPage + 1}`))
    }
  }

  const onRefresh = () => {
    setRefresing(true)
    dispatch(getUsersActionRefresh(`users?page=1`))
    setRefresing(false)
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar
          backgroundColor={'black'}
          hidden={true}
        />
        <View
          // style={styles.input}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 15,
            borderWidth: 1,
            borderColor: '#eaeaea',
            marginHorizontal: 16,
            borderRadius: 8
          }}>

          <Icon
            name="search"
            size={25}
            color="gray"
            style={{ marginHorizontal: 8 }}
          />
          <TextInput
            style={styles.search}
            placeholder="search"
            value={text}
            onChangeText={event => {
              changeTextHandler(event);
            }}
          />
          <Icon
            name="groups"
            size={25}
            color="gray"
            style={{ marginHorizontal: 8 }}
          //style={{position: 'absolute', right: 20, top: 15}}
          />
        </View>
        {/* <FlatList
          data={Users}
          onScrollBeginDrag={Keyboard.dismiss}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.2}
          ListFooterComponent={ CurrentPage<TotalPages ? loadMore : ''}
          onEndReached={() =>{loadMoreItem()}}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        /> */}
        {Users === [] ? <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="black" />
        </View> : 
        <FlatList
          data={Users}
          onScrollBeginDrag={Keyboard.dismiss}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          ListFooterComponent={CurrentPage < TotalPages ? loadMore : ''}
          // onEndReached={() => { loadMoreItem() }}
          onEndReached={({distanceFromEnd}) => {
            if (distanceFromEnd < 0) {
              return;
            } else {
              loadMoreItem()
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        />}

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  group__icon: {
    position: 'absolute',
    right: 20,
    top: 38,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
  actionBar: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    elevation: 10,
    shadowColor: 'black',
  },
  search: {
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 10,
    flex: 1,
  },
  loaderStyle: {
    marginVertical: 5,
    alignItems: 'center'
  }
});
