import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpUsername from '../screens/SignUpUsername';
import SignUpPassword from '../screens/SignUpPassword';
import SignUpName from '../screens/SignUpName';
import SignUpEmail from '../screens/SignUpEmail';
import SignUpBOD from '../screens/SignUpBOD';
import SignUpGender from '../screens/SignUpGender';
import SignUpAddress from '../screens/SignUpAddress';
import SignUpPhone from '../screens/SignUpPhone';

const Stack = createStackNavigator();

const SignUpStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignUpUsername" component={SignUpUsername} options={SignUpUsername.navigationOptions} />
      <Stack.Screen name="SignUpPassword" component={SignUpPassword} options={SignUpPassword.navigationOptions} />
      <Stack.Screen name="SignUpName" component={SignUpName} options={SignUpName.navigationOptions} />
      <Stack.Screen name="SignUpEmail" component={SignUpEmail} options={SignUpEmail.navigationOptions} />
      <Stack.Screen name="SignUpBOD" component={SignUpBOD} options={SignUpBOD.navigationOptions} />
      <Stack.Screen name="SignUpGender" component={SignUpGender} options={SignUpGender.navigationOptions} />
      <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={SignUpGender.SignUpAddress} />
      <Stack.Screen name="SignUpPhone" component={SignUpPhone} options={SignUpPhone.SignUpAddress} />
    </Stack.Navigator>
  );
}
SignUpStack.navigationOptions = {
  headerShown: false,
};
export default SignUpStack;