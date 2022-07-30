import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { SafeAreaView } from 'react-native-safe-area-context';

const Profile = (props) => {
  const { user } = props.route.params
  // console.log(user);
  const openDial = (event) => {
    if (Platform.OS === 'android') {
      Linking.openURL(`tel:${user?.phone}`);
    } else {
      Linking.openURL(`telprompt:${user?.phone}`);
    }
    console.log(event.nativeElement);
  };

  const openMail = () => {
    Linking.openURL(`mailto:${user?.email}`);
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container__profile}>
            <ImageBackground
              source={require('../../../assets/bg.jpg')}
              style={[styles.background__img]}
              imageStyle={{ borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
              <View>
                <Icon
                  name="star"
                  style={{ margin: 10 }}
                  size={30}
                  color="white"
                />
              </View>
              <View>
                <Icon
                  name="dots-three-vertical"
                  style={{ marginHorizontal: 10, marginVertical: 10 }}
                  size={30}
                  color="white"
                />
              </View>
            </ImageBackground>
            <View style={styles.profile}>
              <Image
                source={{ uri: user?.avatar }}
                style={styles.image}
              />
              <View style={styles.profile__name}>
                <Text style={styles.name__text}>{user?.first_name} {user?.last_name}</Text>
                <Text style={{ color: 'gray', opacity: 5, fontSize: 15 }}> Profile no {user?.id}</Text>
              </View>
            </View>
            <View style={styles.profile__info}>
              <TouchableOpacity
                onPress={(event) => {
                  openDial(event);
                }}>
                <View style={styles.profile__info__item}>
                  <Icon
                    style={styles.profile__info__item__icon}
                    name="mobile"
                    size={20}
                    color="gray"
                  />
                  <View style={styles.profile__info__item__txt}>
                    <Text style={styles.desc}>PHONE</Text>
                    <Text style={styles.desc__info}>{user?.phone}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.profile__info__item}>
                <Icon
                  style={styles.profile__info__item__icon}
                  name="phone"
                  size={20}
                  color="gray"
                />
                <View style={styles.profile__info__item__txt}>
                  <Text style={styles.desc}>WORK</Text>
                  <Text style={styles.desc__info}>{user?.work}</Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={(event) => {
                  openMail(event);
                }}>
                <View style={styles.profile__info__item}>
                  <Icon
                    style={styles.profile__info__item__icon}
                    name="mail"
                    size={20}
                    color="gray"
                  />
                  <View style={styles.profile__info__item__txt}>
                    <Text style={styles.desc}>EMAIL</Text>
                    <Text style={styles.desc__info}>{user?.email}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.container__info}>
            <View style={styles.profile__annouce__item}>
              <Icon
                style={styles.profile__annouce__item__icon}
                name="facebook"
                size={20}
                color="blue"
              />
              <View style={styles.profile__annouce__item__txt}>
                <Text style={styles.desc__status}>
                  Don’t cry because it’s over, smile because it happened.
                </Text>
                <Text style={styles.desc__annouce}>
                  Success!{' '}
                  <Text style={{ color: 'blue' }}>
                    <Icon name="dot-single" size={15} color="blue" />
                    2h ago
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container__info}>
            <View style={styles.profile__annouce__item}>
              <Icon
                style={styles.profile__annouce__item__icon}
                name="facebook"
                size={20}
                color="blue"
              />
              <View style={styles.profile__annouce__item__txt}>
                <Text style={styles.desc__status}>
                  Don’t cry because it’s over, smile because it happened.
                </Text>
                <Text style={styles.desc__annouce}>
                  Success!{' '}
                  <Text style={{ color: 'blue' }}>
                    <Icon name="dot-single" size={15} color="blue" />
                    2h ago
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.container__info}>
            <View style={styles.profile__annouce__item}>
              <Icon
                style={styles.profile__annouce__item__icon}
                name="facebook"
                size={20}
                color="blue"
              />
              <View style={styles.profile__annouce__item__txt}>
                <Text style={styles.desc__status}>
                  Don’t cry because it’s over, smile because it happened.
                </Text>
                <Text style={styles.desc__annouce}>
                  Success!{' '}
                  <Text style={{ color: 'blue' }}>
                    <Icon name="dot-single" size={15} color="blue" />
                    2h ago
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  container__profile: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
    elevation: 10,
  },
  container__info: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    marginHorizontal: 15,
    elevation: 10,
    marginBottom: 10,
  },
  background__img: {
    height: 150,
    flexDirection: 'row',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  profile: {
    // height: 120,
    // backgroundColor: 'yellow',
  },
  image: {
    //flex: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: -50,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  profile__name: {
    marginTop: 60,
    flex: 1,
    alignItems: 'center',
  },
  name__text: {
    fontSize: 25,
    fontWeight: '700',
    color: 'black',
  },
  desc: {
    color: 'gray',
    marginVertical: 5,
    fontSize: 13,
    opacity: 0.5
  },
  desc__status: {
    color: 'black',
    marginVertical: 5,
  },
  desc__info: {
    color: 'black',
    fontSize: 17,
  },
  profile__annouce__item: {
    flex: 1,
    flexDirection: 'row',
  },
  profile__annouce__item__icon: {
    marginHorizontal: 25,
    alignSelf: 'center',
    color: 'blue',
  },
  profile__annouce__item__txt: {
    flex: 2,
    alignSelf: 'center',
    marginRight: 15,
  },
  profile__info: {
    // marginHorizontal: 25,
    padding: 25,
    flexDirection: 'column',
    // backgroundColor:'green',
  },
  profile__info__item: {
    flexDirection: 'row',
    marginVertical: 5,
    // backgroundColor: 'red',
  },
  profile__info__item__icon: {
    alignSelf: 'center',
    opacity: 0.6,
  },
  profile__info__item__txt: {
    marginLeft: 25,
  },
});
