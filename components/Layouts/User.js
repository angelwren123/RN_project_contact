import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {useLinkTo} from '@react-navigation/native';
import {StyleSheet, View, TouchableOpacity, Image, Text} from 'react-native';
const User = props => {
    const {user} = props;
  const navigation = useNavigation();
  // const linkTo = useLinkTo();
  const viewProfile = () =>{
    navigation.navigate('Profile', {user:user});
  }
  return (
    <>
      <TouchableOpacity onPress={() => viewProfile()}>
        <View style={[styles.flexR, styles.viewItem]}>
          <Image
            style={styles.image}
            // source={require('../../assets/img.png')}
            source={{uri:user.avatar}}
          />
          <View style={[styles.flexC, styles.ml_15]}>
            <Text style={styles.textName}>{`${user.first_name} ${user.last_name}`}</Text>
            <Text style={styles.textEmail}>{user.email}</Text>
            <View style={styles.shadow} />
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};
export default User;
const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  flexC: {
    flex: 1,
    flexDirection: 'column',
  },
  ml_15: {
    marginLeft: 15,
  },
  flexR: {
    flex: 1,
    flexDirection: 'row',
    // backgroundColor:'red'
  },
  textName: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 2,
    color: 'black',
  },
  shadow: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 5,
    opacity: 0.5,
  },
  textEmail: {
    opacity: 0.8,
    marginTop: 0,
    marginBottom: 5,
  },
  viewList: {
    marginHorizontal: 10,
    marginVertical: 8,
  },
  viewItem: {
    marginHorizontal: 10,
    marginVertical: 10,//fixed
  },
});
