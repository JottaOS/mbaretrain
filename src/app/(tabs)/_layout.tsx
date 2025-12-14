import { Icon } from '@/components/ui/icon';
import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const tintColor = useThemeColor({}, 'tint');
  const tabBarInactiveTintColor = useThemeColor({}, 'tabBarInactive');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: tabBarInactiveTintColor,
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
    </Tabs>
  );
}
