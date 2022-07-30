import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Profile from '../components/Pages/Profile/Profile'
import ListUser from '../components/Pages/ListUsers/ListUsers'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsersAction } from '../redux/actions/actionsTypes'
const Stack = createNativeStackNavigator();

const Routes = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getUsersAction('users?page=1'))
    },[])

    return (
        <NavigationContainer initialRouteName="ListUser">
            <Stack.Navigator>
                <Stack.Screen
                    name='ListUser'
                    component={ListUser}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes