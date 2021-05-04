import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import InitialPage from '../pages/InitialPage'
import MaxDoctor from '../pages/MaxDoctor'

const AppStack = createStackNavigator();

const AppRoutes = () => {
  return (
    <AppStack.Navigator>
        <AppStack.Screen
        name="InitialPage"
        options={{ headerTransparent: true, headerTitle: "" }}
        component={InitialPage}
      />
      <AppStack.Screen
        name="MaxDoctor"
        options={{ headerTransparent: true, headerTitle: "", headerLeft: ()=> null }}
        component={MaxDoctor}
      />
    </AppStack.Navigator>
  );
};

export default AppRoutes;
