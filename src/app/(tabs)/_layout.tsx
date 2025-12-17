import { Icon } from '@/components/ui/icon';
import { colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.tint,
        tabBarInactiveTintColor: colors.tabBarInactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          paddingHorizontal: 46
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='workouts'
        options={{
          tabBarIcon: ({ color, size }) => <Icon name='history' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, size }) => <Ionicons name='person-outline' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='(training)'
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
