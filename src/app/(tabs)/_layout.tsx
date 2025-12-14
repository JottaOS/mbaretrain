import { useThemeColor } from '@/hooks/use-theme-color';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  const tintColor = useThemeColor({}, 'tint');
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: textColor,
        tabBarStyle: {
          backgroundColor: backgroundColor,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0
        },
        headerShown: false
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='workouts'
        options={{
          title: 'Entrenamientos',
          tabBarIcon: ({ color, size }) => <Ionicons name='barbell' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='progress'
        options={{
          title: 'Progreso',
          tabBarIcon: ({ color, size }) => <Ionicons name='stats-chart' size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
